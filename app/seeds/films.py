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
        genre="Superhero, Action, Crime",
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
        title="WALL·E",
        genre="Family, Animation, Science-Fiction",
        year=2008,
        duration=98,
        synopsis="WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
        key_art="https://a.ltrbxd.com/resized/film-poster/4/5/9/9/4/45994-walle-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/tb/h9/tt/v5/walle-1920-1920-1080-1080-crop-000000.jpg?v=3de34e9aa3"
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
    film16 = Film(
        user_id=1,
        title="Spider-Man: Into the Spider-Verse",
        genre="Animation, Superhero, Adventure",
        year=2018,
        duration=117,
        synopsis="Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson “Kingpin” Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.",
        key_art="https://a.ltrbxd.com/resized/film-poster/2/5/1/9/4/3/251943-spider-man-into-the-spider-verse-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/yd/x2/cb/mw/spider-man-into-spider-verse-1920-1920-1080-1080-crop-000000.jpg"
    )
    film17 = Film(
        user_id=1,
        title="Spider-Man: Across the Spider-Verse",
        genre="Animation, Superhero, Adventure",
        year=2023,
        duration=140,
        synopsis="After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        key_art="https://a.ltrbxd.com/resized/film-poster/4/9/7/6/3/1/497631-spider-man-across-the-spider-verse-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/22/gj/k3/ql/spider-verse-1920-1920-1080-1080-crop-000000.jpg"
    )
    film18 = Film(
        user_id=1,
        title="Nope",
        genre="Mystery, Science-Fiction, Horror",
        year=2022,
        duration=130,
        synopsis="Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
        key_art="https://a.ltrbxd.com/resized/film-poster/6/8/2/5/4/7/682547-nope-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/3x/n2/o4/ia/nope-2022-1920-1920-1080-1080-crop-000000.jpg"
    )
    film19 = Film(
        user_id=1,
        title="Blade Runner",
        genre="Drama, Science-Fiction, Thriller",
        year=1982,
        duration=118,
        synopsis="In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        key_art="https://a.ltrbxd.com/resized/sm/upload/85/io/38/dz/vfzE3pjE5G7G7kcZWrA3fnbZo7V-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/ne/pc/iq/wf/blade-runner-1920-1920-1080-1080-crop-000000.jpg"
    )
    film20 = Film(
        user_id=1,
        title="Blade Runner 2049",
        genre="Science-Fiction, Drama",
        year=2017,
        duration=164,
        synopsis="Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what’s left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        key_art="https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/aj/h8/ku/9n/blade-runner-2049-1920-1920-1080-1080-crop-000000.jpg"
    )
    film21 = Film(
        user_id=2,
        title="City of God",
        genre="Crime, Drama",
        year=2002,
        duration=130,
        synopsis="Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...",
        key_art="https://a.ltrbxd.com/resized/film-poster/5/1/5/2/3/51523-city-of-god-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/pn/lo/pe/jr/city-of-god-1920-1920-1080-1080-crop-000000.jpg"
    )
    film22 = Film(
        user_id=2,
        title="Call Me By Your Name",
        genre="Drama, Romance, LGBT",
        year=2017,
        duration=132,
        synopsis="In 1980s Italy, a relationship begins between seventeen-year-old teenage Elio and the older adult man hired as his father's research assistant.",
        key_art="https://a.ltrbxd.com/resized/sm/upload/g9/9t/cc/7u/tcNniniS4rfqrLH0oORikJfnIwY-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/3j/zm/4w/p5/call-me-by-your-name-1920-1920-1080-1080-crop-000000.jpg"
    )
    film23 = Film(
        user_id=2,
        title="Oldboy",
        genre="Drama, Action, Mystery",
        year=2003,
        duration=120,
        synopsis="With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
        key_art="https://a.ltrbxd.com/resized/film-poster/5/1/4/5/4/51454-oldboy-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/w7/2l/wo/u1/oldboy-1920-1920-1080-1080-crop-000000.jpg"
    )
    film24 = Film(
        user_id=2,
        title="Lady Bird",
        genre="Drama, Comedy",
        year=2017,
        duration=94,
        synopsis="A California high school student plans to escape from her family and small town by going to college in New York, much to the disapproval of wildly loving, deeply opinionated and strong-willed mother.",
        key_art="https://a.ltrbxd.com/resized/film-poster/3/2/6/2/7/9/326279-lady-bird-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/om/94/t6/xo/lady-bird-1920-1920-1080-1080-crop-000000.jpg",
    )
    film25 = Film(
        user_id=2,
        title="Frances Ha",
        genre="Drama, Comedy",
        year=2012,
        duration=86,
        synopsis="An aspiring dancer moves to New York City and becomes caught up in a whirlwind of flighty fair-weather friends, diminishing fortunes and career setbacks.",
        key_art="https://a.ltrbxd.com/resized/film-poster/9/6/0/8/3/96083-frances-ha-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/eo/w6/w1/7w/4DACCDBE-4318-4E7A-BFB8-4150FA796966-1920-1920-1080-1080-crop-000000.jpg"
    )
    film26 = Film(
        user_id=2,
        title="BlacKkKlansman",
        genre="Crime, History, Drama",
        year=2018,
        duration=135,
        synopsis="Colorado Springs, late 1970s. Ron Stallworth, an African American police officer, and Flip Zimmerman, his Jewish colleague, run an undercover operation to infiltrate the Ku Klux Klan.",
        key_art="https://a.ltrbxd.com/resized/film-poster/4/1/8/1/3/5/418135-blackkklansman-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/t4/wa/t7/20/black-klansman-1920-1920-1080-1080-crop-000000.jpg"
    )
    film27 = Film(
        user_id=2,
        title="She's Gotta Have It",
        genre="Romance, Comedy",
        year=1986,
        duration=84,
        synopsis="The story of Nola Darling's simultaneous sexual relationships with three different men is told by her and by her partners and other friends. All three men wanted her to commit solely to them; Nola resists being “owned” by a single partner.",
        key_art="https://a.ltrbxd.com/resized/film-poster/3/4/0/1/7/34017-she-s-gotta-have-it-0-460-0-690-crop.jpg",
        cover_photo="https://a.ltrbxd.com/resized/sm/upload/gm/m0/yy/60/shes-gotta-have-it-1200-1200-675-675-crop-000000.jpg"
    )

    # film = Film(
    #     user_id=2,
    #     title=
    #     genre=
    #     year=
    #     duration=
    #     synopsis=
    #     key_art=
    #     cover_photo=
    # )

    db.session.add_all([film1, film2, film3, film4, film5, film6, film7, film8, film9, film10,
                       film11, film12, film13, film14, film15, film16, film17, film18, film19, film20,
                       film21, film22, film23, film24, film25, film26, film27])
    db.session.commit()


def undo_films():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM films"))

    db.session.commit()
