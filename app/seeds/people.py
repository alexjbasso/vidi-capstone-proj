from app.models import db, environment, SCHEMA, Person
from sqlalchemy.sql import text


def seed_people():

    person1 = Person(
        user_id=1,
        name="Jim Carrey",
        featured_photo="https://image.tmdb.org/t/p/w342/u0AqTz6Y7GHPCHINS01P7gPvDSb.jpg",
        bio="James Eugene Carrey (born January 17, 1962) is a Canadian and American actor, comedian, writer, and producer known for his energetic slapstick performances."
    )
    person2 = Person(
        user_id=1,
        name="Michel Gondry",
        featured_photo="https://image.tmdb.org/t/p/w342/1IAnVsl8JgHpUirBXpsbLlWyS1y.jpg",
        bio="Michel Gondry (born May 8, 1963) is a French film, commercial, and music video director and a screenwriter. He is noted for his inventive visual style and manipulation of mise en scène."
    )
    person3 = Person(
        user_id=1,
        name="Charlie Kaufman",
        featured_photo="https://image.tmdb.org/t/p/w342/75aOpLBpvdtQM3BkWGFUvMs6LvH.jpg",
        bio="Charles Stuart Kaufman (born November 19, 1958) is an American filmmaker and novelist. Three of Kaufman's scripts appear in the Writers Guild of America's list of the 101 greatest movie screenplays ever written."
    )
    person4 = Person(
        user_id=1,
        name="Kate Winslet",
        featured_photo="https://image.tmdb.org/t/p/w342/e3tdop3WhseRnn8KwMVLAV25Ybv.jpg",
        bio="Kate Elizabeth Winslet (born 5 October 1975) is an English actress. Known for her work in independent films, particularly period dramas, as well as for her portrayals of headstrong and complicated women."
    )
    person5 = Person(
        user_id=1,
        name="Ellen Kuras",
        featured_photo="https://image.tmdb.org/t/p/w342/karbKVM0CPdRXbmLp4XX9oLQXSb.jpg",
        bio="Ellen Kuras ASC (born July 10, 1959 in New Jersey) is an American cinematographer and director. She has collaborated several times with directors Michel Gondry and Spike Lee."
    )
    person6 = Person(
        user_id=1,
        name="Valdís Óskarsdóttir",
        featured_photo="#",
        bio=""
    )
    person7 = Person(
        user_id=1,
        name="Jon Brion",
        featured_photo="https://image.tmdb.org/t/p/w342/r63TFvQJme2CgvVen2do1SI4L5I.jpg",
        bio="Jon Brion (born December 11, 1963) is an American singer, songwriter, multi-instrumentalist, record producer, and composer. He performed with the Excerpts, the Bats, 'Til Tuesday and the Grays before becoming an established producer and film score composer."
    )
    person8 = Person(
        user_id=1,
        name="Joel Schumacher",
        featured_photo="https://image.tmdb.org/t/p/w342/ttXniaNjekrOBjLQpZqTv89AakA.jpg",
        bio="Joel T. Schumacher (August 29, 1939 - June 22, 2020) was an American film director, screenwriter, producer, and costume designer."
    )
    person9 = Person(
        user_id=1,
        name="Val Kilmer",
        featured_photo="https://image.tmdb.org/t/p/w342/dZEGiq4XmCiXq9hmz0vVLId010z.jpg",
        bio="Val Edward Kilmer (born December 31, 1959) is an American actor. Originally a stage actor, Kilmer became popular in the mid-1980s after a string of appearances in comedy films, starting with Top Secret! (1984), then the cult classic Real Genius (1985), as well as blockbuster action films, including a role in Top Gun and a lead role in Willow."
    )
    person10 = Person(
        user_id=1,
        name="Margot Robbie",
        featured_photo="https://image.tmdb.org/t/p/w342/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
        bio="Margot Elise Robbie (born July 2, 1990) is an Australian actress and producer known for her work in both blockbuster and independent films."
    )
    person11 = Person(
        user_id=1,
        name="Greta Gerwig",
        featured_photo="https://image.tmdb.org/t/p/w342/nHrWXL1VFaV4a3wRNlhp5NfO98m.jpg",
        bio="Greta Gerwig is an American actress, playwright, screenwriter, and director based in NY and has collaborated with husband Noah Baumbach on several films."
    )
    person12 = Person(
        user_id=1,
        name="Spike Lee",
        featured_photo="https://image.tmdb.org/t/p/w342/2KOHXgk2uoRXl6u7V9xpAIo3uay.jpg",
        bio="Spike Lee was born Shelton Lee in 1957, in Atlanta, Georgia. At a very young age, he moved from pre-civil rights Georgia, to Brooklyn, New York. Lee came from a proud and intelligent background. His father was a jazz musician, and his mother, a school teacher. His mother dubbed him Spike, due to his tough nature."
    )
    person13 = Person(
        user_id=1,
        name="Daniel Scheinert",
        featured_photo="https://image.tmdb.org/t/p/w342/5VSpMLDEmygCu4bfB89Y7NV6YjM.jpg",
        bio="Daniel Scheinert is best known as the redneck half of the filmmaking duo DANIELS along with Daniel Kwan."
    )
    person14 = Person(
        user_id=1,
        name="Daniel Kwan",
        featured_photo="https://image.tmdb.org/t/p/w342/9OgOnYB8g7cww2LOMfjP6oFE5Qc.jpg",
        bio="Daniel Kwan is one half of the filmmaking duo known as DANIELS, along with Daniel Scheinert."
    )
    person15 = Person(
        user_id=1,
        name="Michelle Yeoh",
        featured_photo="https://image.tmdb.org/t/p/w342/6oxvfyrrM3YmhgFZSqc8ESqPZoC.jpg",
        bio="Michelle Yeoh Choo Kheng (born Yeoh Choo Kheng; 6 August 1962) is a Malaysian actress. Credited as Michelle Khan in her early films in Hong Kong, she rose to fame in the 1990s after starring in a series of Hong Kong action films where she performed her own stunts."
    )
    person16 = Person(
        user_id=1,
        name="Ke Huy Quan",
        featured_photo="https://image.tmdb.org/t/p/w342/5PfYVcNLs1gGKIo0qwJrvyc2UOZ.jpg",
        bio="Ke Huy Quan (born August 20, 1971), also known as Jonathan Ke Quan, is an American actor. As a young actor, Quan rose to fame playing Short Round in Indiana Jones and the Temple of Doom (1984) and Data in The Goonies (1985)."
    )
    person17 = Person(
        user_id=1,
        name="Victor Fleming",
        featured_photo="https://image.tmdb.org/t/p/w342/kwMaOpQnirmXFEuvP0t7Zc94sqj.jpg",
        bio="Victor Fleming was an American film director, cinematographer, and producer. His most popular films were The Wizard of Oz (1939), and Gone with the Wind (1939), for which he won an Academy Award for Best Director."
    )
    person18 = Person(
        user_id=1,
        name="Judy Garland",
        featured_photo="https://image.tmdb.org/t/p/w342/dkhMrLSfnqS3fmxWuXaEMwxN0Tf.jpg",
        bio='Judy Garland (1922-969) was an American actress and singer. After appearing in vaudeville with her sisters, Garland was signed to Metro-Goldwyn-Mayer. There she made more than two dozen films, including nine with Mickey Rooney and "The Wizard of Oz". After fifteen years, Garland was released from the studio but gained renewed success through concert appearances and later a return to acting.'
    )
    person19 = Person(
        user_id=1,
        name="Hayao Miyazaki",
        featured_photo="https://image.tmdb.org/t/p/w342/mG3cfxtA5jqDc7fpKgyzZMKoXDh.jpg",
        bio="Hayao Miyazaki (Miyazaki Hayao, born January 5, 1941) is a Japanese manga artist and prominent film director and animator of many popular anime feature films. Through a career that has spanned nearly five decades, Miyazaki has attained international acclaim as a maker of animated feature films and, along with Isao Takahata, co-founded Studio Ghibli, an animation studio and production company."
    )
    person20 = Person(
        user_id=1,
        name="Rumi Hiiragi",
        featured_photo="https://image.tmdb.org/t/p/w342/zITaVtFyc4xSM3mxSoPRWHbqgJI.jpg",
        bio="Rumi Hiiragi (born August 1, 1987 in Tokyo) is a Japanese actress."
    )

    db.session.add_all([person1, person2, person3, person4, person5, person6, person7, person8, person9, person10,
                       person11, person12, person13, person14, person15, person16, person17, person18, person19, person20])
    db.session.commit()


def undo_people():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM people"))

    db.session.commit()
