from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Film(db.Model):
    __tablename__ = 'films'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    genre = db.Column(db.String(255), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    synopsis = db.Column(db.String(1000), nullable=False)
    key_art = db.Column(db.String(255), nullable=False)
    cover_photo = db.Column(db.String(255))
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship('User', back_populates='films')
    reviews = db.relationship(
        'Review', back_populates='film', cascade="all, delete")
    roles = db.relationship(
        'Role', back_populates='film', cascade="all, delete")
    seen_films = db.relationship(
        'SeenFilm', back_populates='film', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'genre': self.genre,
            'year': self.year,
            'duration': self.duration,
            'synopsis': self.synopsis,
            'key_art': self.key_art,
            'cover_photo': self.cover_photo,
            'roles': [role.to_dict_film() for role in self.roles],
            'reviews': [review.to_dict_for_film() for review in self.reviews],
            'avg_rating': (sum([review.to_dict_for_film()['rating'] for review in self.reviews]) / len([review.to_dict_for_film()['rating'] for review in self.reviews])) if len(self.reviews) != 0 else 0,
            'views': [view.to_dict() for view in self.seen_films]
        }

    def to_dict_for_review(self):
        return {
            'id': self.id,
            'title': self.title,
            'key_art': self.key_art,
            'year': self.year
        }
