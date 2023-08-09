from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, IntegerField
from wtforms.validators import DataRequired

class RoleForm(FlaskForm):
    film_id = IntegerField("film_id", validators=[DataRequired()])
    person_id = IntegerField("person_id", validators=[DataRequired()])
    role = StringField("year", validators=[DataRequired()])
    submit = SubmitField("Submit")
