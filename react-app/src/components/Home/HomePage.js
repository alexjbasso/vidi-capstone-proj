import "./HomePage.css";

export default function HomePage({ user, films, people }) {

  const featuredTitles = ["Barbie", "Spider-Man: Across the Spider-Verse", "Everything Everywhere All at Once", "Paddington 2", "Eternal Sunshine of the Spotless Mind"];
  let featuredFilms = films.filter(film => featuredTitles.includes(film.title))
  featuredFilms = [featuredFilms[2], featuredFilms[4], featuredFilms[1], featuredFilms[3], featuredFilms[0]];
  const featuredNames = ["Adam Driver", "Spike Lee", "Greta Gerwig", "Hayao Miyazaki", "Margot Robbie"]
  let featuredPeople = people.filter(person => featuredNames.includes(person.name))
  featuredPeople = [featuredPeople[4], featuredPeople[2], featuredPeople[1], featuredPeople[3], featuredPeople[0]];

  return (
    <div id="home-page-container">
      <span id="welcome-header">Welcome {user ? `back, ${user.username}` : "to Vidi"}</span>

      <span id="welcome-subtitle">Here's what we've been watching...</span>

      <div id="home-page-body">

        <div>
          <span>POPULAR FILMS</span>
          <div id="featured-films">
            {featuredFilms.map(film => <a key={film.id} href={`/film/${film.id}`}><img src={film.key_art}></img></a>)}
          </div>
        </div>

        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="https://a.ltrbxd.com/resized/sm/upload/j8/gt/r8/ss/pro-950-0-950-0-0.png?k=bc62c7df04"></img> </a>
        <div>
          <span>POPULAR PEOPLE</span>
          <div id="featured-people">
            {featuredPeople.map(person => <a key={person.id} href={`/person/${person.id}`}><img src={person.featured_photo}></img></a>)}
          </div>
        </div>
      </div>

    </div>
  )
}
