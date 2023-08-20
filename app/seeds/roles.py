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
    role77 = Role(
        person_id=53,
        film_id=5,
        role="Actor"
    )
    role91 = Role(
        person_id=63,
        film_id=5,
        role="Writer"
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
    role106 = Role(
        person_id=68,
        film_id=7,
        role="Composer"
    )

# Paris Is Burning
    role29 = Role(
        person_id=27,
        film_id=8,
        role="Director"
    )
    role30 = Role(
        person_id=28,
        film_id=8,
        role="Actor"
    )

# Alien
    role31 = Role(
        person_id=24,
        film_id=9,
        role="Director"
    )
    role32 = Role(
        person_id=25,
        film_id=9,
        role="Actor"
    )
# Parasite
    role33 = Role(
        person_id=29,
        film_id=10,
        role="Director"
    )
    role34 = Role(
        person_id=29,
        film_id=10,
        role="Writer"
    )
    role35 = Role(
        person_id=30,
        film_id=10,
        role="Actor"
    )
    role36 = Role(
        person_id=31,
        film_id=10,
        role="Actor"
    )
# Vertigo
    role37 = Role(
        person_id=32,
        film_id=11,
        role="Director"
    )
    role38 = Role(
        person_id=33,
        film_id=11,
        role="Actor"
    )
    role39 = Role(
        person_id=34,
        film_id=11,
        role="Actor"
    )
    role40 = Role(
        person_id=35,
        film_id=11,
        role="Composer"
    )
# WALL•E
    role41 = Role(
        person_id=36,
        film_id=12,
        role="Director"
    )
    role42 = Role(
        person_id=36,
        film_id=12,
        role="Writer"
    )
    role43 = Role(
        person_id=37,
        film_id=12,
        role="Actor"
    )
    role44 = Role(
        person_id=38,
        film_id=12,
        role="Actor"
    )
    role45 = Role(
        person_id=25,
        film_id=12,
        role="Actor"
    )
# Cleo from 5 to 7
    role46 = Role(
        person_id=39,
        film_id=13,
        role="Director"
    )
    role47 = Role(
        person_id=39,
        film_id=13,
        role="Writer"
    )
    role48 = Role(
        person_id=40,
        film_id=13,
        role="Actor"
    )
# Paddington
    role49 = Role(
        person_id=41,
        film_id=14,
        role="Director"
    )
    role50 = Role(
        person_id=42,
        film_id=14,
        role="Actor"
    )
    role51 = Role(
        person_id=43,
        film_id=14,
        role="Actor"
    )
# Paddington 2
    role52 = Role(
        person_id=41,
        film_id=15,
        role="Director"
    )
    role53 = Role(
        person_id=42,
        film_id=15,
        role="Actor"
    )
    role54 = Role(
        person_id=43,
        film_id=15,
        role="Actor"
    )
# Spiderverse 1
    role55 = Role(
        person_id=44,
        film_id=16,
        role="Director"
    )
    role56 = Role(
        person_id=44,
        film_id=16,
        role="Writer"
    )
    role57 = Role(
        person_id=45,
        film_id=16,
        role="Director"
    )
    role58 = Role(
        person_id=46,
        film_id=16,
        role="Director"
    )
    role59 = Role(
        person_id=47,
        film_id=16,
        role="Actor"
    )
    role60 = Role(
        person_id=48,
        film_id=16,
        role="Actor"
    )

# Spiderverse 2
    role61 = Role(
        person_id=49,
        film_id=17,
        role="Director"
    )
    role62 = Role(
        person_id=50,
        film_id=17,
        role="Director"
    )
    role63 = Role(
        person_id=51,
        film_id=17,
        role="Director"
    )
    role64 = Role(
        person_id=47,
        film_id=17,
        role="Actor"
    )
    role65 = Role(
        person_id=48,
        film_id=17,
        role="Actor"
    )
    role66 = Role(
        person_id=21,
        film_id=17,
        role="Actor"
    )
# Nope
    role67 = Role(
        person_id=22,
        film_id=18,
        role="Director"
    )
    role68 = Role(
        person_id=22,
        film_id=18,
        role="Writer"
    )
    role69 = Role(
        person_id=21,
        film_id=18,
        role="Actor"
    )
    role70 = Role(
        person_id=23,
        film_id=18,
        role="Actor"
    )
# Blade Runner
    role71 = Role(
        person_id=24,
        film_id=19,
        role="Director"
    )
    role72 = Role(
        person_id=26,
        film_id=19,
        role="Actor"
    )

# Blade Runner 2049
    role73 = Role(
        person_id=52,
        film_id=20,
        role="Director"
    )
    role74 = Role(
        person_id=53,
        film_id=20,
        role="Actor"
    )
    role75 = Role(
        person_id=26,
        film_id=20,
        role="Actor"
    )
    role76 = Role(
        person_id=54,
        film_id=20,
        role="Actor"
    )
# City of God
    role78 = Role(
        person_id=55,
        film_id=21,
        role="Director"
    )
    role79 = Role(
        person_id=56,
        film_id=21,
        role="Actor"
    )
# Call Me By Your Name
    role80 = Role(
        person_id=57,
        film_id=22,
        role="Director"
    )
    role81 = Role(
        person_id=58,
        film_id=22,
        role="Actor"
    )
    role82 = Role(
        person_id=59,
        film_id=22,
        role="Actor"
    )
# Oldboy
    role83 = Role(
        person_id=60,
        film_id=23,
        role="Director"
    )
    role84 = Role(
        person_id=60,
        film_id=23,
        role="Writer"
    )
    role85 = Role(
        person_id=61,
        film_id=23,
        role="Actor"
    )
# Lady Bird
    role86 = Role(
        person_id=11,
        film_id=24,
        role="Director"
    )
    role87 = Role(
        person_id=11,
        film_id=24,
        role="Writer"
    )
    role88 = Role(
        person_id=62,
        film_id=24,
        role="Actor"
    )
    role89 = Role(
        person_id=58,
        film_id=24,
        role="Actor"
    )
    role90 = Role(
        person_id=7,
        film_id=24,
        role="Composer"
    )
# Frances Ha
    role92 = Role(
        person_id=11,
        film_id=25,
        role="Actor"
    )
    role93 = Role(
        person_id=11,
        film_id=25,
        role="Writer"
    )
    role94 = Role(
        person_id=63,
        film_id=25,
        role="Director"
    )
    role95 = Role(
        person_id=63,
        film_id=25,
        role="Writer"
    )
    role96 = Role(
        person_id=64,
        film_id=25,
        role="Actor"
    )
# BlacKkKlansman
    role97 = Role(
        person_id=12,
        film_id=26,
        role="Director"
    )
    role98 = Role(
        person_id=12,
        film_id=26,
        role="Writer"
    )
    role99 = Role(
        person_id=65,
        film_id=26,
        role="Actor"
    )
    role100 = Role(
        person_id=64,
        film_id=26,
        role="Actor"
    )
# She's Gotta Have It
    role101 = Role(
        person_id=12,
        film_id=27,
        role="Director"
    )
    role102 = Role(
        person_id=12,
        film_id=27,
        role="Writer"
    )
    role103 = Role(
        person_id=12,
        film_id=27,
        role="Actor"
    )
    role104 = Role(
        person_id=12,
        film_id=27,
        role="Editor"
    )
    role105 = Role(
        person_id=66,
        film_id=27,
        role="Actor"
    )
# Princess Mononoke
    role107 = Role(
        person_id=19,
        film_id=28,
        role="Director"
    )
    role108 = Role(
        person_id=19,
        film_id=28,
        role="Writer"
    )
    role109 = Role(
        person_id=67,
        film_id=28,
        role="Actor"
    )
    role110 = Role(
        person_id=68,
        film_id=28,
        role="Composer"
    )

    # role107 = Role(
    #     person_id=
    #     film_id=
    #     role=
    # )
    db.session.add_all([role1, role2, role3, role4, role5, role6, role7, role8, role9, role10,
                        role11, role12, role13, role14, role15, role16, role17, role18, role19, role20,
                        role21, role22, role23, role24, role25, role26, role27, role28, role29, role30,
                        role31, role32, role33, role34, role35, role36, role37, role38, role39, role40,
                        role41, role42, role43, role44, role45, role46, role47, role48, role49, role50,
                        role51, role52, role53, role54, role55, role56, role57, role58, role59, role60,
                        role61, role62, role63, role64, role65, role66, role67, role68, role69, role70,
                        role71, role72, role73, role74, role75, role76, role77, role78, role79, role80,
                        role81, role82, role83, role84, role85, role86, role87, role88, role89, role90,
                        role91, role92, role93, role94, role95, role96, role97, role98, role99, role100,
                        role101, role102, role103, role104, role105, role106, role107, role108, role109, role110
                        ])
    db.session.commit()


def undo_roles():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM roles"))

    db.session.commit()
