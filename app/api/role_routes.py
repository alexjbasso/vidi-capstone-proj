from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Role
from app.forms.role_form import RoleForm
from app.api.auth_routes import validation_errors_to_error_messages

role_routes = Blueprint('roles', __name__)

# Adding a person to a film
@role_routes.route('/new', methods=['POST'])
@login_required
def add_person_to_film():
    form = RoleForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_role = Role(
            film_id = form.data['film_id'],
            person_id = form.data['person_id'],
            role = form.data['role']   
        )

        db.session.add(new_role)
        db.session.commit()

        return jsonify(new_role.to_dict())

    return { 'errors': validation_errors_to_error_messages(form.errors) }, 400


# Removing a person from a film
@role_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_film(id):
    role = Role.query.get(id)

    if role is None:
        return {'errors': 'Film not found'}, 404

    db.session.delete(role)
    db.session.commit()

    return { 'message': 'Successfully Deleted'}
