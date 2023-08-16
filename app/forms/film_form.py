from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField, StringField, IntegerField
from wtforms.validators import DataRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS


class FilmAdd(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    genre = StringField("genre", validators=[DataRequired()])
    year = IntegerField("year", validators=[DataRequired()])
    duration = IntegerField("duration", validators=[DataRequired()])
    synopsis = StringField("synopsis", validators=[DataRequired()])
    key_art = FileField("key_art", validators=[
                        FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    cover_photo = FileField("cover_photo", validators=[
                            FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Submit")


class FilmEdit(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    genre = StringField("genre", validators=[DataRequired()])
    year = IntegerField("year", validators=[DataRequired()])
    duration = IntegerField("duration", validators=[DataRequired()])
    synopsis = StringField("synopsis", validators=[DataRequired()])
    key_art = FileField("key_art", validators=[
                        FileAllowed(list(ALLOWED_EXTENSIONS))])
    cover_photo = FileField("cover_photo", validators=[
                            FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Submit")
