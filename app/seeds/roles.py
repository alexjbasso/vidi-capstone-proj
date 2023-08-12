from app.models import db, environment, SCHEMA, Role
from sqlalchemy.sql import text


def seed_roles():

    # Eternal Sunshine
    role1 = Role(
        person_id=1,
        film_id=1,
        role='Actor'
    )
    role2 = Role(
        person_id=2,
        film_id=1,
        role='Director'
    )
    role3 = Role(
        person_id=2,
        film_id=1,
        role='Writer'
    )
    role4 = Role(
        person_id=3,
        film_id=1,
        role='Writer'
    )
    role5 = Role(
        person_id=4,
        film_id=1,
        role='Actor'
    )
    role6 = Role(
        person_id=5,
        film_id=1,
        role='Cinematographer'
    )
    role7 = Role(
        person_id=6,
        film_id=1,
        role='Editor'
    )
    role8 = Role(
        person_id=7,
        film_id=1,
        role='Composer'
    )

# Batman Forever
    role9 = Role(
        person_id=1,
        film_id=2,
        role='Actor'
    )
    role10 = Role(
        person_id=8,
        film_id=2,
        role='Director'
    )
    role11 = Role(
        person_id=9,
        film_id=2,
        role='Actor'
    )

# The Wizard of Oz
    role12 = Role(
        person_id=17,
        film_id=3,
        role='Director'
    )
    role13 = Role(
        person_id=18,
        film_id=3,
        role='Actor'
    )

# EEAAO
    role14 = Role(
        person_id=13,
        film_id=4,
        role='Director'
    )
    role15 = Role(
        person_id=13,
        film_id=4,
        role='Writer'
    )
    role16 = Role(
        person_id=14,
        film_id=4,
        role='Director'
    )
    role17 = Role(
        person_id=14,
        film_id=4,
        role='Writer'
    )
    role18 = Role(
        person_id=15,
        film_id=4,
        role='Actor'
    )
    role19 = Role(
        person_id=16,
        film_id=4,
        role='Actor'
    )

# Barbie
    role20 = Role(
        person_id=10,
        film_id=5,
        role='Actor'
    )
    role21 = Role(
        person_id=11,
        film_id=5,
        role='Director'
    )
    role22 = Role(
        person_id=11,
        film_id=5,
        role='Writer'
    )

# Do the Right Thing
    role23 = Role(
        person_id=12,
        film_id=6,
        role='Director'
    )
    role24 = Role(
        person_id=12,
        film_id=6,
        role='Writer'
    )
    role25 = Role(
        person_id=12,
        film_id=6,
        role='Actor'
    )

# Spirited Away
    role26 = Role(
        person_id=19,
        film_id=7,
        role='Director'
    )
    role27 = Role(
        person_id=19,
        film_id=7,
        role='Writer'
    )
    role28 = Role(
        person_id=20,
        film_id=7,
        role='Actor'
    )

    db.session.add_all([role1, role2, role3, role4, role5, role6, role7, role8, role9, role10, role11, role12, role13, role14,
                       role15, role16, role17, role18, role19, role20, role21, role22, role23, role24, role25, role26, role27, role28])
    db.session.commit()


def undo_roles():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM roles"))

    db.session.commit()
