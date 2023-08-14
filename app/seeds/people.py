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
    person21 = Person(
        user_id=1,
        name="Daniel Kaluuya",
        featured_photo="https://image.tmdb.org/t/p/w342/a07Tqzgp0IrW9YkcOQiuKavP4tm.jpg",
        bio="Daniel Kaluuya (born 24 February 1989) is a British actor. Prominent both on screen and stage, he has received numerous accolades, including an Academy Award, two BAFTA Awards, and a Golden Globe Award."
    )
    person22 = Person(
        user_id=1,
        name="Jordan Peele",
        featured_photo="https://image.tmdb.org/t/p/w342/kFUKn5g3ebpyZ3CSZZZo2HFWRNQ.jpg",
        bio="Jordan Peele was born in New York City and was raised by his single mother on Manhattan's Upper West Side. He graduated from The Calhoun School on Manhattan's Upper West Side, and went on to Sarah Lawrence College. After two years, Peele dropped out to form a comedy duo with his college roommate and future Key & Peele comedy writer, Rebecca Drysdale. As of 2016, he is married to comedian Chelsea Peretti. In 2018, he won his first Oscar for writing his directorial debut, Get Out."
    )
    person23 = Person(
        user_id=1,
        name="Keke Palmer",
        featured_photo="https://image.tmdb.org/t/p/w342/f5i3WzdMt02mlfm9I9LHKRJtZ4J.jpg",
        bio='Lauren Keyana "Keke" Palmer (born August 26, 1993) is an American actress, singer and television personality. Known for playing leading and character roles in comedy and drama productions, she has received several accolades, including a Primetime Emmy Award, five NAACP Image Awards, and nominations for a Daytime Emmy Award and a Screen Actors Guild Award. Time magazine included her on their list of most influential people in the world in 2019.'
    )
    person24 = Person(
        user_id=1,
        name="Ridley Scott",
        featured_photo="https://image.tmdb.org/t/p/w342/zABJmN9opmqD4orWl3KSdCaSo7Q.jpg",
        bio="Ridley Scott is a filmmaker who born on 30th November, 1937, in South Shields, Tyne and Wear, England, and the son of Elizabeth and Colonel Francis Percy Scott."
    )
    person25 = Person(
        user_id=1,
        name="Sigourney Weaver",
        featured_photo="https://image.tmdb.org/t/p/w342/sHWCLx54yLtaFtppp5ADjAsrWIc.jpg",
        bio='Susan Alexandra "Sigourney" Weaver (born October 8, 1949) is an American actress. Weaver is considered to be a pioneer of action heroines in science fiction films. She is known for her role as Ellen Ripley in the Alien franchise, which earned her an Academy Award nomination in 1986 and is often regarded as one of the most significant female protagonists in cinema history.'
    )
    person26 = Person(
        user_id=1,
        name="Harrison Ford",
        featured_photo="https://image.tmdb.org/t/p/w342/5M7oN3sznp99hWYQ9sX0xheswWX.jpg",
        bio="Legendary Hollywood Icon Harrison Ford was born on July 13, 1942 in Chicago, Illinois. His family history includes a strong lineage of actors, radio personalities, and models."
    )
    person27 = Person(
        user_id=1,
        name="Jennie Livingston",
        featured_photo="https://image.tmdb.org/t/p/w342/wuTozQ1eVVHiChzolsM7UazBXU1.jpg",
        bio="Jennie Livingston is a groundbreaking filmmaker, known for her lively storytelling, nuanced character portraits, and thoughtful explorations of identity, class, race, death, sex, and gender. She works in both fiction and nonfiction."
    )
    person28 = Person(
        user_id=1,
        name="Pepper LaBeija",
        featured_photo="https://image.tmdb.org/t/p/w342/xiJjcbQaxtsqQhreqKgWelYJI02.jpg",
        bio='Pepper LaBeija was an American drag queen and fashion designer. LaBeija was known as "the last remaining queen of the Harlem drag balls".'
    )
    person29 = Person(
        user_id=1,
        name="Bong Joon-ho",
        featured_photo="https://image.tmdb.org/t/p/w342/tKLJBqbdH6HFj2QxLA5o8Zk7IVs.jpg",
        bio="Bong Joon-ho (Korean: 봉준호), born September 14, 1969, is a South Korean film director, producer and screenwriter. His films are characterised by emphasis on social themes, genre-mixing, black humor, and sudden tone shifts."
    )
    person30 = Person(
        user_id=1,
        name="Song Kang-ho",
        featured_photo="https://image.tmdb.org/t/p/w342/dyWUKQlNyr7SUAjo58VZXvPODkr.jpg",
        bio="Song Kang-ho (송강호) is a South Korean actor. Considered one of the best actors of the 21st century, he is most known for his collaborations with directors Park Chan-wook and Bong Joon-ho. He was awarded Best Actor at the 75th Cannes Film Festival for his performance in Broker (2022), and has been named Gallup Korea's Film Actor of the Year four times."
    )
    person31 = Person(
        user_id=1,
        name="Park So-dam",
        featured_photo="https://image.tmdb.org/t/p/w342/gaDnEiMD5PClT9ARg1bSFyexbor.jpg",
        bio="Park So-dam (born September 8, 1991) is a South Korean actress. Park began her acting career in independent films. She broke into the mainstream in 2015 after making a strong impression with her performances in The Silenced and The Priests, which netted her multiple Best New Actress nominations and a win from the Busan Film Critics Awards."
    )
    person32 = Person(
        user_id=1,
        name="Alfred Hitchcock",
        featured_photo="https://image.tmdb.org/t/p/w342/108fiNM6poRieMg7RIqLJRxdAwG.jpg",
        bio='Sir Alfred Joseph Hitchcock, KBE (13 August 1899 - 29 April 1980), was an English director and producer. Labeled as the "Master of Suspense", he became known for thrillers, often combined with a dark sense of humor.'
    )
    person33 = Person(
        user_id=1,
        name="James Stewart",
        featured_photo="https://image.tmdb.org/t/p/w342/yId5fdDqShOkr0YjCoJbUOZipcX.jpg",
        bio='James Maitland "Jimmy" Stewart was an American film and stage actor, known for his distinctive voice and his everyman persona. Over the course of his career, he starred in many films widely considered classics and was nominated for five Academy Awards, winning one in competition and receiving one Lifetime Achievement award. He was a major MGM contract star. He also had a noted military career and was a World War II and Vietnam War veteran, who rose to the rank of Brigadier General in the United States Air Force Reserve.'
    )
    person34 = Person(
        user_id=1,
        name="Kim Novak",
        featured_photo="https://image.tmdb.org/t/p/w342/wQYlkzNBJkvFAY3R0FQZfwLhTDx.jpg",
        bio="Marilyn Pauline Novak (born February 13, 1933), known professionally as Kim Novak, is an American retired film and television actress."
    )
    person35 = Person(
        user_id=1,
        name="Bernard Herrmann",
        featured_photo="https://image.tmdb.org/t/p/w342/vpIPFhUpHBqDrbgbnaQnDCYekDI.jpg",
        bio="Bernard Herrmann (born Max Herman; June 29, 1911 - December 24, 1975) was an American composer best known for his work in composing for motion pictures. As a conductor, he championed the music of lesser-known composers."
    )
    person36 = Person(
        user_id=1,
        name="Andrew Stanton",
        featured_photo="https://image.tmdb.org/t/p/w342/tRwWuo06aN9vuXAPaswMN42x2ii.jpg",
        bio="Andrew Stanton (born December 3, 1965) is an American film director, screenwriter, producer, and occasional voice actor based at Pixar Animation Studios. His film work includes writing and directing Finding Nemo and WALL-E; both films earned him the Academy Award for Best Animated Feature."
    )
    person37 = Person(
        user_id=1,
        name="Ben Burtt",
        featured_photo="https://image.tmdb.org/t/p/w342/16OhOb7WngOi4WOnGpRpbDSzYnd.jpg",
        bio="Benjamin Burtt Jr. (born July 12, 1948) is an American sound designer, film director and editor, screenwriter, and voice actor."
    )
    person38 = Person(
        user_id=1,
        name="Elissa Knight",
        featured_photo="https://image.tmdb.org/t/p/w342/vrgL992F6hQYTyNeJWDKRsrolaP.jpg",
        bio="Elissa Knight is an American employee at Pixar Animation Studios and voice actress. As a voice actress, her first major role was in the 2008 film WALL-E as a robot named EVE."
    )
    person39 = Person(
        user_id=1,
        name="Agnès Varda",
        featured_photo="https://image.tmdb.org/t/p/w342/248oxbPDbgnLSw3kzNyXmLxZFpZ.jpg",
        bio="Agnès Varda (30 May 1928 - 29 March 2019) was a Belgian-born French film director and professor at the European Graduate School. Her films, photographs, and art installations focus on documentary realism, feminist issues, and social commentary — with a distinct experimental style."
    )
    person40 = Person(
        user_id=1,
        name="Corinne Marchand",
        featured_photo="https://image.tmdb.org/t/p/w342/dv4Bp0Q2v7vULEmwTt6bMKMJuE0.jpg",
        bio="Corinne Marchand (born 4 December 1931 in Paris) is a French actress. She is best known for playing the pop singer Cléo in Cléo from 5 to 7."
    )
    person41 = Person(
        user_id=1,
        name="Paul King",
        featured_photo="https://image.tmdb.org/t/p/w342/hDixADZQOBP0E3G9ZxC4kuNHO0.jpg",
        bio="He graduated from St Catharine's College, Cambridge University with first-class honors in English in 1999."
    )
    person42 = Person(
        user_id=1,
        name="Ben Winshaw",
        featured_photo="https://image.tmdb.org/t/p/w342/2GBtQ6scGeSHkX1urOP1EJbmksx.jpg",
        bio='Benjamin John "Ben" Whishaw (born 14 October 1980) is an English actor who trained at the Royal Academy of Dramatic Art. Whishaw is best known for his breakthrough role as Hamlet.'
    )
    person43 = Person(
        user_id=1,
        name="Sally Hawkins",
        featured_photo="https://image.tmdb.org/t/p/w342/iQV1udEUKw6P3sk3vJWOQwLwN0r.jpg",
        bio="Sally Cecilia Hawkins (born 27 April 1976) is an English actress who began her career on stage and then moved into film. She has received several awards including a Golden Globe Award and the Berlin International Film Festival's Silver Bear for Best Actress, with nominations for a Critics' Choice Movie Award, a Screen Actors Guild Award, two Academy Awards, and two British Academy Film Awards."
    )
    person44 = Person(
        user_id=1,
        name="Rodney Rothman",
        featured_photo="https://image.tmdb.org/t/p/w342/75yKuJr1wL8qesEDYL2IHK67BEx.jpg",
        bio="Rodney Rothman is an American filmmaker, screenwriter, producer, and film director known for Spider-Man: Into the Spider-Verse, Popstar: Never Stop Never Stopping, 22 Jump Street, Forgetting Sarah Marshall, Get Him to the Greek, Undeclared, and Late Show with David Letterman."
    )
    person45 = Person(
        user_id=1,
        name="Peter Ramsey",
        featured_photo="https://image.tmdb.org/t/p/w342/eAL9QdCEYyxiMP9cl9lQddg8zEa.jpg",
        bio="Peter A. Ramsey (born December 23, 1962) is an American illustrator, storyboard artist, film director, screenwriter and film producer. He is best known for directing DreamWorks Animation's Rise of the Guardians (2012), becoming the first African American to direct a major American animated film, and co-directing Sony Pictures Animation's Spider-Man: Into the Spider-Verse (2018). For Spider-Man: Into the Spider-Verse, he became the first African American to be nominated for and win an Academy Award for Best Animated Feature."
    )
    person46 = Person(
        user_id=1,
        name="Bob Persichetti",
        featured_photo="https://image.tmdb.org/t/p/w342/cNd5VyMI3sNgiHOwLIB7WDiH128.jpg",
        bio="Robert Persichetti, Jr. is an American film director, screenwriter, storyboard artist, and animator. He made his directorial debut with Spider-Man: Into the Spider-Verse (2018), co-directing with Peter Ramsey and Rodney Rothman."
    )
    person47 = Person(
        user_id=1,
        name="Shameik Moore",
        featured_photo="https://image.tmdb.org/t/p/w342/uJNaSTsfBOvtFWsPP23zNthknsB.jpg",
        bio="Shameik Alti Moore (born May 4, 1995) is an American actor, singer, and rapper, of Jamaican descent."
    )
    person48 = Person(
        user_id=1,
        name="Hailee Steinfeld",
        featured_photo="https://image.tmdb.org/t/p/w342/q4UpZMEuvNCN5lL5L6xa3ICpheJ.jpg",
        bio="Hailee Steinfeld (born December 11, 1996) is an American actress and singer. Known for her acting versatility and musical prowess, she is the recipient of various accolades, including a Peabody Award, a Critics' Choice Movie Award, a Billboard Music Award, and nominations for an Academy Award, a British Academy Film Award, a Golden Globe Award, three Critics' Choice Movie Awards and a Screen Actors Guild Award."
    )
    person49 = Person(
        user_id=1,
        name="Joaquim Dos Santos",
        featured_photo="https://image.tmdb.org/t/p/w342/w45GPb3cW6TqPw4FxB5Hc6zzAwx.jpg",
        bio="Joaquim Dos Santos is a Portuguese-American television director of animated cartoons, best known for his directing work on Justice League Unlimited, Avatar: The Last Airbender and The Legend of Korra."
    )
    person50 = Person(
        user_id=1,
        name="Justin K. Thompson",
        featured_photo="https://image.tmdb.org/t/p/w342/mRMi8Q2fmlfbDYkE7A63gzFtGsZ.jpg",
        bio="Justin K. Thompson is an illustrator, visual development artist, production designer, and director for animated works. He is one of the three directors of Spider-Man: Across the Spider-Verse."
    )
    person51 = Person(
        user_id=1,
        name="Kemp Powers",
        featured_photo="https://image.tmdb.org/t/p/w342/9wBUgoJFh0n1yrvsiYMqqgtdvcT.jpg",
        bio="Kemp Powers is an American screenwriter and playwright. He is best known for his work on the play One Night in Miami, the 2020 film adaptation of the same name, Star Trek: Discovery and for co-directing the acclaimed Pixar film Soul with Pete Docter."
    )
    person52 = Person(
        user_id=1,
        name="Denis Villeneuve",
        featured_photo="https://image.tmdb.org/t/p/w342/zdDx9Xs93UIrJFWYApYR28J8M6b.jpg",
        bio="Denis Villeneuve OC CQ (born October 3, 1967) is a Canadian filmmaker. He is a four-time recipient of the Canadian Screen Award (formerly Genie Award) for Best Direction, winning for Maelström in 2001, Polytechnique in 2009, Incendies in 2010 and Enemy in 2013."
    )
    person53 = Person(
        user_id=2,
        name="Ryan Gosling",
        featured_photo="https://image.tmdb.org/t/p/w342/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg",
        bio="Ryan Thomas Gosling (born November 12, 1980) is a Canadian actor. Prominent in independent film, he has also worked in blockbuster films of varying genres, and has accrued a worldwide box office gross of over 1.9 billion USD. He has received various accolades, including a Golden Globe Award, and nominations for two Academy Awards and a BAFTA Award."
    )
    person54 = Person(
        user_id=1,
        name="Ana de Armas",
        featured_photo="https://image.tmdb.org/t/p/w342/tkBWBvcLTihUcVf6iwbMQTFqEEv.jpg",
        bio="Ana de Armas was born in Cuba on April 30, 1988. At the age of 14, she began her studies at the National Theatre School of Havana, where she graduated after 4 years. She made her film debut with Una rosa de Francia (2006), which was directed by Manuel Gutiérrez Aragón. In 2006 she moved to Spain where she continued her film career, and started doing television."
    )


    # person = Person(
    #     user_id=1,
    #     name=,
    #     featured_photo=
    #     bio=
    # )

    db.session.add_all([person1, person2, person3, person4, person5, person6, person7, person8, person9, person10,
                       person11, person12, person13, person14, person15, person16, person17, person18, person19, person20,
                       person21, person22, person23, person24, person25, person26, person27, person28, person29, person30,
                       person31, person32, person33, person34, person35, person36, person37, person38, person39, person40,
                       person41, person42, person43, person44, person45, person46, person47, person48, person49, person50,
                       person51, person52, person53, person54])
    db.session.commit()


def undo_people():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM people"))

    db.session.commit()
