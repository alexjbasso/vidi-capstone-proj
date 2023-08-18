from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review, Film
from app.forms.review_form import ReviewForm
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('review', __name__)

# Get all reviews

@review_routes.route("")
def get_all_reviews():
    """
    Query for all reviews and returns them in a list of review dictionaries
    """
    return jsonify([review.to_dict() for review in Review.query.all()])


# Get all reviews of current user

@review_routes.route('/current')
@login_required
def get_user_reviews():
    """
    Query for all reviews created by the current user and return them in a list of review dictionaries
    """
    user_reviews = Review.query.filter(Review.user_id == current_user.id)
    reviews_dict = [review.to_dict() for review in user_reviews]
    return jsonify(reviews_dict)

# Get all reviews of a film 

@review_routes.route('/film/<int:filmId>')
def get_film_reviews(filmId):
    """
    Query for all reviews of a film and return them in a list of review dictionaries
    """
    film = Film.query.get(filmId)
    if film is None:
        return {'errors': 'Film not found'}, 404

    film_reviews = Review.query.filter(Review.film_id == filmId)
    reviews_dict = [review.to_dict() for review in film_reviews]
    return jsonify(reviews_dict)


# Get review by id

@review_routes.route("/<int:id>")
def get_review_by_id(id):
    """
    Query for a review by id and returns that review in a dictionary
    """
    review = Review.query.get(id)
    if review is not None:
        return jsonify(review.to_dict())
    else:
        return {'errors': 'Review not found'}, 404


# Add new review to a film

@review_routes.route('/new', methods=['POST'])
# @login_required
def add_new_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    form.data['user_id'] = current_user.id

    if form.validate_on_submit():

        new_review = Review(
            user_id=current_user.id,
            film_id=form.data['film_id'],
            rating=form.data['rating'],
            review_text=form.data['review_text'],
        )

        db.session.add(new_review)
        db.session.commit()

        return jsonify(new_review.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit a review


@review_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_review(id):

    review = Review.query.get(id)
    if review is None or review.user_id != current_user.id:
        return {'errors': 'Review not found'}, 404

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form.data['user_id'] = current_user.id

    if form.validate_on_submit():

        review.rating = form.data['rating']
        review.review_text = form.data['review_text']

        db.session.commit()

        return jsonify(review.to_dict())

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# Delete a review created by the user

@review_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)

    if review is None or review.user_id != current_user.id:
        return {'errors': 'Review not found'}, 404

    db.session.delete(review)
    db.session.commit()

    return {'message': 'Successfully Deleted'}
