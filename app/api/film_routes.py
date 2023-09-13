from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Film, SeenFilm
from app.forms.film_form import FilmAdd, FilmEdit
from app.api.auth_routes import validation_errors_to_error_messages
from app.api.aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3
from sqlalchemy.orm import joinedload


film_routes = Blueprint('films', __name__)

# Get all films


@film_routes.route("")
def get_all_films():
    """
    Query for all films and returns them in a list of film dictionaries
    """
    # films = Film.query.options(joinedload(Film.roles), joinedload(Film.reviews), joinedload(Film.seen_films)).all()
    return jsonify([film.to_dict_all() for film in Film.query.all()])


@film_routes.route('/current')
@login_required
def get_user_films():
    """
    Query for all films created by the current user and return them in a list of film dictionaries
    """
    user_films = Film.query.filter(Film.user_id == current_user.id)
    films_dict = [film.to_dict_all() for film in user_films]
    return jsonify(films_dict)

# Get film by id


@film_routes.route("/<int:id>")
def get_film_by_id(id):
    """
    Query for a film by id and returns that film in a dictionary
    """
    film = Film.query.get(id)
    if film is not None:
        return jsonify(film.to_dict())
    else:
        return {'errors': 'Film not found'}, 404

# Add new film


@film_routes.route('/new', methods=['POST'])
@login_required
def add_new_film():
    form = FilmAdd()
    form['csrf_token'].data = request.cookies['csrf_token']

    form.data['user_id'] = current_user.id

    if form.validate_on_submit():

        key_art = form.data['key_art']
        key_art.filename = get_unique_filename(key_art.filename)
        key_art_upload = upload_file_to_s3(key_art)
        if 'url' not in key_art_upload:
            return {'errors': 'upload error'}

        if form.data['cover_photo']:
            cover_photo = form.data['cover_photo']
            cover_photo.filename = get_unique_filename(cover_photo.filename)
            cover_photo_upload = upload_file_to_s3(cover_photo)
            if 'url' not in cover_photo_upload:
                return {'errors': 'upload error'}

        new_film = Film(
            user_id=current_user.id,
            title=form.data['title'],
            genre=form.data['genre'],
            year=form.data['year'],
            duration=form.data['duration'],
            synopsis=form.data['synopsis'],
            key_art=key_art_upload['url'],
            cover_photo=cover_photo_upload['url'] if form.data['cover_photo'] else None
        )

        db.session.add(new_film)
        db.session.commit()

        return jsonify(new_film.to_dict())

    print(validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit a film


@film_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_film(id):
    film = Film.query.get(id)
    if film is None or film.user_id != current_user.id:
        return {'errors': 'Film not found'}, 404

    form = FilmEdit()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.data['user_id'] = current_user.id

    if form.validate_on_submit():

        if form.data['key_art']:
            key_art = form.data['key_art']
            key_art.filename = get_unique_filename(key_art.filename)
            key_art_upload = upload_file_to_s3(key_art)
            if 'url' not in key_art_upload:
                return {'errors': 'upload error'}
            
        if form.data['cover_photo']:
            cover_photo = form.data['cover_photo']
            cover_photo.filename = get_unique_filename(cover_photo.filename)
            cover_photo_upload = upload_file_to_s3(cover_photo)
            if 'url' not in cover_photo_upload:
                return {'errors': 'upload error'}

        film.title = form.data['title']
        film.genre = form.data['genre']
        film.year = form.data['year']
        film.duration = form.data['duration']
        film.synopsis = form.data['synopsis']
        film.key_art = key_art_upload['url'] if form.data['key_art'] else film.key_art
        film.cover_photo = cover_photo_upload['url'] if form.data['cover_photo'] else film.cover_photo

        db.session.commit()

        return jsonify(film.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Deleting a film created by the user


@film_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_film(id):
    film = Film.query.get(id)

    if film is None or film.user_id != current_user.id:
        return {'errors': 'Film not found'}, 404

    db.session.delete(film)
    db.session.commit()

    return {'message': 'Successfully Deleted'}
