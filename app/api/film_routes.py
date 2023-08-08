from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Film

film_routes = Blueprint('films', __name__)

@film_routes.route("")
def get_all_films():
    """
    Query for all films and returns them in a list of film dictionaries
    """
    return jsonify([film.to_dict() for film in Film.query.all()])
