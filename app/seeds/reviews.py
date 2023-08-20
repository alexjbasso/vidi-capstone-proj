from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text


def seed_reviews():

    # Barbie
    review1 = Review(
        user_id=1,
        film_id=5,
        rating=5,
        review_text="s(he's) bro(ken)"
    )

    review2 = Review(
        user_id=2,
        film_id=5,
        rating=5,
        review_text="sometimes you just gotta remember that you are kenough 🫵"
    )

    review3 = Review(
        user_id=3,
        film_id=5,
        rating=4,
        review_text="Dropping the kids off at Oppenheimer so the adults could watch Barbie"
    )

# Spiderverse 2

    review4 = Review(
        user_id=1,
        film_id=17,
        rating=5,
        review_text="What an incredible treat this movie is. It's been several hours and I'm still beaming with joy. The colors, the animation, the humor, the soundtrack; everything about it was damn near perfect and I enjoyed myself to the fullest from beginning to end. The only bad thing about it is that it ended."
    )
    review5 = Review(
        user_id=2,
        film_id=17,
        rating=4,
        review_text="one of the most overwhelming viewing experiences of my life, compounded by my inability (refusal) to pee for about 100 minutes. outstanding. another banger for the canon of guys who love to loudly recognize something (e.g. “that's spider-man, from spider-man”)"
    )
    review6 = Review(
        user_id=3,
        film_id=17,
        rating=4,
        review_text="a mind-blowing combination of magical artistry, post-modern imagination, and dunking on Jeff Koons. I'm in awe."
    )

# EEAAO
    review7 = Review(
        user_id=1,
        film_id=4,
        rating=4,
        review_text="easily one of the top 5 movies about taxes"
    )
    review8 = Review(
        user_id=2,
        film_id=4,
        rating=4,
        review_text="rocks just made me cry"
    )
    review9 = Review(
        user_id=3,
        film_id=4,
        rating=5,
        review_text="It's hard to account for recency bias in saying something this definite, and surely someone will want to start a useless argument or hold resentment against the movie because they disagree, but I think this is one of my favorite movies I have ever seen. It's been a while since I felt that way with something new. But my expectations were high going in and I still thought so 30 minutes in. Then an hour in. Then 2 hours in. Then it ended with a David Byrne and Mitski song over the credits. C'mon now."
    )

# Paddington 2

    review10 = Review(
        user_id=1,
        film_id=15,
        rating=5,
        review_text="people who don't cry over paddington are the weaker species and will be taken by natural selection"
    )

    review11 = Review(
        user_id=2,
        film_id=15,
        rating=5,
        review_text="please give this movie the nobel peace prize"
    )

    review12 = Review(
        user_id=3,
        film_id=15,
        rating=5,
        review_text="that part where Paddington cures that man's depression by just cleaning his windows and letting the sun come in? that's what happens to me when I watch anything involving this little bear."
    )

# ESOTSM

    review13 = Review(
        user_id=1,
        film_id=1,
        rating=5,
        review_text="Wish I could erase this film from my mind just so I can watch it for the first time all over again"
    )

    review14 = Review(
        user_id=2,
        film_id=1,
        rating=5,
        review_text="Also! Remember love is dead and always has been, nothing matters and we're all going to die anyway. Happy Valentine's Day!"
    )
    review15 = Review(
        user_id=3,
        film_id=1,
        rating=5,
        review_text="this also happened when i dyed my hair"
    )

    db.session.add_all([review1, review2, review3, review4, review5, review6, review7, review8, review9, review10,
                        review11, review12, review13, review14, review15])
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
