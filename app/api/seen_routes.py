from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Film, SeenFilm
from app.api.auth_routes import validation_errors_to_error_messages

seen_routes = Blueprint('seen', __name__)

# Get all users who've seen a film
@seen_routes.route("/<int:id>")
def get_all_seen(id):
    """
    Query for all users who've seen a film and return them in a list of film dictionaries
    """
    
    film_seens = SeenFilm.query.filter(SeenFilm.film_id == id)
    seens_dict = [seen.to_dict() for seen in film_seens]
    return jsonify(seens_dict)


# Get all films a user has seen
@seen_routes.route("/current")
@login_required
def get_all_seen_films():
    """
    Query for all films seen by the current user and return them in a list of dictionaries
    """
    
    user_seens = SeenFilm.query.filter(SeenFilm.user_id == current_user.id)
    seens_dict = [seen.to_dict() for seen in user_seens]
    return jsonify(seens_dict)


# Mark a film as seen
@seen_routes.route('/<int:id>', methods=['POST'])
@login_required
def log_film_as_seen(id):
    """
    Log selected film as seen and return seen_films for the film in a list of seen dictionaries
    """
    film = Film.query.get(id).to_dict()
    # If song already has user's like, return error
    for seen_film in film["views"]:
        if seen_film["user_id"] == current_user.id:
            return { "errors": "User has already seen film" }, 405

    # Else create and add new like to song
    seen_film = SeenFilm(
        film_id=id,
        user_id=current_user.id
    )

    db.session.add(seen_film)
    db.session.commit()
    return seen_film.to_dict()

# Mark a film as unseen
@seen_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def log_film_as_unseen(id):
    """
    Log selected film as unseen and return seen_films for the film in a list of seen dictionaries
    """

    user_seens = SeenFilm.query.filter(SeenFilm.user_id == current_user.id, SeenFilm.film_id == id).all()

    if len(user_seens):
      film_to_delete = user_seens[0]
      db.session.delete(film_to_delete)
      db.session.commit()
      return {'message': 'Successfully Deleted'}
    else:
        return {'message': 'You have not seen this film'}
