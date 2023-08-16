from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, IntegerField
from wtforms.validators import DataRequired

class PersonForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    featured_photo = StringField("featured_photo")
    bio = StringField("bio")
    submit = SubmitField("Submit")
