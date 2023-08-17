from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, IntegerField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    film_id = IntegerField("film_id", validators=[DataRequired()])
    rating = IntegerField("rating", validators=[DataRequired()])
    review_text = StringField("review_text", validators=[DataRequired()])
    submit = SubmitField("Submit")
