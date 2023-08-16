from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField, StringField, IntegerField
from wtforms.validators import DataRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS


class PersonForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    featured_photo = FileField("featured_photo", validators=[
        FileAllowed(list(ALLOWED_EXTENSIONS))])
    bio = StringField("bio")
    submit = SubmitField("Submit")
