from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Person
from app.forms.person_form import PersonForm
from app.api.auth_routes import validation_errors_to_error_messages
from app.api.aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3

person_routes = Blueprint('people', __name__)

# Get all people


@person_routes.route("")
def get_all_people():
    """
    Query for all people and returns them in a list of person dictionaries
    """
    return jsonify([person.to_dict() for person in Person.query.all()])


@person_routes.route('/current')
@login_required
def get_user_people():
    """
    Query for all people created by the current user and return them in a list of person dictionaries
    """
    user_people = Person.query.filter(Person.user_id == current_user.id)
    people_dict = [person.to_dict() for person in user_people]
    return jsonify(people_dict)

# Get person by id


@person_routes.route("/<int:id>")
def get_person_by_id(id):
    """
    Query for a person by id and returns that person in a dictionary
    """
    person = Person.query.get(id)
    if person is not None:
        return jsonify(person.to_dict())
    else:
        return {'errors': 'Person not found'}, 404

# Add new person


@person_routes.route('/new', methods=['POST'])
@login_required
def add_new_person():
    form = PersonForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    form.data['user_id'] = current_user.id

    if form.validate_on_submit():

        if form.data['featured_photo']:
            featured_photo = form.data['featured_photo']
            featured_photo.filename = get_unique_filename(
                featured_photo.filename)
            featured_photo_upload = upload_file_to_s3(featured_photo)
            if 'url' not in featured_photo_upload:
                return {'errors': 'upload error'}

        new_person = Person(
            user_id=current_user.id,
            name=form.data['name'],
            featured_photo=featured_photo_upload['url'] if form.data['featured_photo'] else None,
            bio=form.data['bio']
        )

        db.session.add(new_person)
        db.session.commit()

        return jsonify(new_person.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit a person


@person_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_person(id):

    person = Person.query.get(id)
    if person is None or person.user_id != current_user.id:
        return {'errors': 'Person not found'}, 404

    form = PersonForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.data['user_id'] = current_user.id

    if form.validate_on_submit():

        if form.data['featured_photo']:
            featured_photo = form.data['featured_photo']
            featured_photo.filename = get_unique_filename(
                featured_photo.filename)
            featured_photo_upload = upload_file_to_s3(featured_photo)
            if 'url' not in featured_photo_upload:
                return {'errors': 'upload error'}

        person.name = form.data['name']
        person.featured_photo = featured_photo_upload['url'] if form.data[
            'featured_photo'] else person.featured_photo
        person.bio = form.data['bio'] if form.data['bio'] else person.bio

        db.session.commit()

        return jsonify(person.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Deleting a person created by the user


@person_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_person(id):
    person = Person.query.get(id)

    if person is None or person.user_id != current_user.id:
        return {'errors': 'Person not found'}, 404

    db.session.delete(person)
    db.session.commit()

    return {'message': 'Successfully Deleted'}
