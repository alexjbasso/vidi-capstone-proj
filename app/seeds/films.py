from app.models import db, environment, SCHEMA, Film
from sqlalchemy.sql import text


def seed_films():

    film1 = Film(
        user_id=1,
        title="Eternal Sunshine of the Spotless Mind",
        genre="Drama, Sci-Fi, Comedy",
        year=2004,
        duration=108,
        synopsis="Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
        key_art="https://a.ltrbxd.com/resized/sm/upload/ay/bp/kl/1y/uBfQ7IGpi0jXSP3GPCzp9Pzm10v-0-500-0-750-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/2w/va/23/lr/esotsm-1200-1200-675-675-crop-000000.jpg",
    )

    film2 = Film(
        user_id=1,
        title="Batman Forever",
        genre="Action, Fantasy, Crime",
        year=1995,
        duration=121,
        synopsis="The Dark Knight of Gotham City confronts a dastardly duo: Two-Face and the Riddler. Formerly District Attorney Harvey Dent, Two-Face believes Batman caused the courtroom accident which left him disfigured on one side. And Edward Nygma, computer-genius and former employee of millionaire Bruce Wayne, is out to get the philanthropist; as The Riddler. Former circus acrobat Dick Grayson, his family killed by Two-Face, becomes Wayne's ward and Batman's new partner Robin.",
        key_art="https://a.ltrbxd.com/resized/film-poster/5/1/6/7/8/51678-batman-forever-0-500-0-750-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/6u/zy/2g/w3/batman-forever-1200-1200-675-675-crop-000000.jpg",
    )

    film3 = Film(
        user_id=1,
        title="The Wizard of Oz",
        genre="Adventure, Fantasy, Family",
        year=1939,
        duration=102,
        synopsis="Young Dorothy finds herself in a magical world where she makes friends with a lion, a scarecrow and a tin man as they make their way along the yellow brick road to talk with the Wizard and ask for the things they miss most in their lives. The Wicked Witch of the West is the only thing that could stop them.",
        key_art="https://a.ltrbxd.com/resized/film-poster/5/1/4/9/4/51494-the-wizard-of-oz-0-1000-0-1500-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/sg/ci/yx/3z/the-wizard-of-oz-1920-1920-1080-1080-crop-000000.jpg",
    )

    film4 = Film(
        user_id=1,
        title="Everything Everywhere All at Once",
        genre="Action, Adventure, Science-Fiction",
        year=2022,
        duration=140,
        synopsis="An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
        key_art="https://a.ltrbxd.com/resized/film-poster/4/7/4/4/7/4/474474-everything-everywhere-all-at-once-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/qo/9b/xq/hl/everything-1920-1920-1080-1080-crop-000000.jpg",
    )

    film5 = Film(
        user_id=1,
        title="Barbie",
        genre="Fantasy, Comedy, Adventure",
        year=2023,
        duration=114,
        synopsis="Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        key_art="https://a.ltrbxd.com/resized/film-poster/2/7/7/0/6/4/277064-barbie-0-500-0-750-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/mm/bt/iu/mk/fRyYKQdsXIjw26MendWxpWmvnBs-1200-1200-675-675-crop-000000.jpg",
    )

    film6 = Film(
        user_id=1,
        title="Do the Right Thing",
        genre="Drama",
        year=2004,
        duration=120,
        synopsis="Salvatore “Sal” Fragione is the Italian owner of a pizzeria in Brooklyn. A neighborhood local, Buggin' Out, becomes upset when he sees that the pizzeria's Wall of Fame exhibits only Italian actors. Buggin' Out believes a pizzeria in a black neighborhood should showcase black actors, but Sal disagrees. The wall becomes a symbol of racism and hate to Buggin' Out and to other people in the neighborhood, and tensions rise.",
        key_art="https://a.ltrbxd.com/resized/sm/upload/zm/fz/vn/ie/obNQLtdeJy3IiKnExWoWBJH8V67-0-1000-0-1500-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/rz/oo/nx/09/do-the-right-thing-1200-1200-675-675-crop-000000.jpg"
    )
    film7 = Film(
        user_id=1,
        title="Spirited Away",
        genre="Fantasy, Animation, Family",
        year=2001,
        duration=125,
        synopsis="A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        key_art="https://a.ltrbxd.com/resized/film-poster/5/1/9/2/1/51921-spirited-away-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/s7/yb/jv/eq/spirited-away-1920-1920-1080-1080-crop-000000.jpg"
    )
    film8 = Film(
        user_id=1,
        title="Paris Is Burning",
        genre="Documentary, LGBT",
        year=1990,
        duration=71,
        synopsis="Where does voguing come from, and what, exactly, is throwing shade? This landmark documentary provides a vibrant snapshot of the 1980s through the eyes of New York City’s African American and Latinx Harlem drag-ball scene. Made over seven years, PARIS IS BURNING offers an intimate portrait of rival fashion “houses,” from fierce contests for trophies to house mothers offering sustenance in a world rampant with homophobia, transphobia, racism, AIDS, and poverty. Featuring legendary voguers, drag queens, and trans women — including Willi Ninja, Pepper LaBeija, Dorian Corey, and Venus Xtravaganza — PARIS IS BURNING brings it, celebrating the joy of movement, the force of eloquence, and the draw of community.",
        key_art="https://a.ltrbxd.com/resized/film-poster/3/1/3/5/5/31355-paris-is-burning-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/wh/vr/71/bd/paris-is-burning-1200-1200-675-675-crop-000000.jpg"
    )
    film9 = Film(
        user_id=1,
        title="Alien",
        genre="Science-Fiction, Horror",
        year=1979,
        duration=117,
        synopsis="During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
        key_art="https://a.ltrbxd.com/resized/sm/upload/8v/f1/qw/aa/bg7K6VtUG7Ew70gQj6SSroD5d4R-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/ty/tt/43/of/alien-1979-1920-1920-1080-1080-crop-000000.jpg"
    )
    film10 = Film(
        user_id=1,
        title="Parasite",
        genre="Drama, Comedy, Thriller",
        year=2019,
        duration=133,
        synopsis="All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        key_art="https://a.ltrbxd.com/resized/film-poster/4/2/6/4/0/6/426406-parasite-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/oi/ha/78/z8/parasite-1920-1920-1080-1080-crop-000000.jpg"
    )
    film11 = Film(
        user_id=1,
        title="Vertigo",
        genre="Thriller, Mystery, Romance",
        year=1958,
        duration=128,
        synopsis="A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
        key_art="https://a.ltrbxd.com/resized/sm/upload/q9/3o/ng/om/obhM86qyv8RsE69XSMTtT9FdE0b-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/4r/2r/1e/rd/vertigo-1200-1200-675-675-crop-000000.jpg"
    )
    film12 = Film(
        user_id=1,
        title="Toy Story",
        genre="Animation, Adventure, Comedy, Family",
        year=1995,
        duration=81,
        synopsis="Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
        key_art="https://a.ltrbxd.com/resized/film-poster/5/1/2/9/0/51290-toy-story-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/sf/gx/1q/o3/toy-story-90-1920-1920-1080-1080-crop-000000.jpg"
    )
    film13 = Film(
        user_id=1,
        title="Cléo from 5 to 7",
        genre="Drama",
        year=1962,
        duration=90,
        synopsis="Agnès Varda eloquently captures Paris in the sixties with this real-time portrait of a singer set adrift in the city as she awaits test results of a biopsy. A chronicle of the minutes of one woman's life, Cléo from 5 to 7 is a spirited mix of vivid vérité and melodrama, featuring a score by Michel Legrand and cameos by Jean-Luc Godard and Anna Karina.",
        key_art="https://a.ltrbxd.com/resized/film-poster/5/1/6/1/1/51611-cleo-from-5-to-7-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/c1/i0/7o/ws/cleo-5-to-7-1920-1920-1080-1080-crop-000000.jpg"
    )
    film14 = Film(
        user_id=1,
        title="Paddington",
        genre="Adventure, Comedy, Family",
        year=2014,
        duration=96,
        synopsis="A young Peruvian bear travels to London in search of a new home. Finding himself lost and alone at Paddington Station, he meets the kindly Brown family.",
        key_art="https://a.ltrbxd.com/resized/film-poster/9/2/1/6/0/92160-paddington-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/4f/5z/fz/yc/paddington-1920-1920-1080-1080-crop-000000.jpg"
    )
    film15 = Film(
        user_id=1,
        title="Paddington 2",
        genre="Comedy, Family, Adventure",
        year=2017,
        duration=104,
        synopsis="Paddington, now happily settled with the Browns, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy, but it is stolen.",
        key_art="https://a.ltrbxd.com/resized/sm/upload/ij/ub/so/m3/zuXMvSQq9F7H29qzuUm0qyUqw6m-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/zc/ru/8t/gh/paddington-2-1920-1920-1080-1080-crop-000000.jpg"
    )


    db.session.add_all([film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, film11, film12, film13, film14, film15])
    db.session.commit()


def undo_films():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM films"))

    db.session.commit()
