import "./HomePage.css";

export default function HomePage({ user, films, people }) {

  const featuredTitles = [5, 17, 4, 15, 1];
  let featuredFilms = films.filter(film => featuredTitles.includes(film.id))
  featuredFilms = [featuredFilms[2], featuredFilms[4], featuredFilms[1], featuredFilms[3], featuredFilms[0]];
  const featuredNames = [64, 12, 11, 19, 10]
  let featuredPeople = people.filter(person => featuredNames.includes(person.id))
  featuredPeople = [featuredPeople[4], featuredPeople[2], featuredPeople[1], featuredPeople[3], featuredPeople[0]];

  return (
    <div id="home-page-container">
      <span id="welcome-header">Welcome {user ? `back, ${user.username}` : "to Vidi"}</span>

      <span id="welcome-subtitle">Here's what we've been watching...</span>

      <div id="home-page-body">

        <div>
          <span className="popular-heading">POPULAR FILMS</span>
          <div className="popular-cont" id="featured-films">
            {featuredFilms.map(film =>
              film?.id && <div className={`home-film-tile-cont ${film.id === 5 ? 'barbie-cont' : 'norm-cont'}`}>
                <a key={film.id} href={`/film/${film.id}`}><img className="home-film-tile" src={film.key_art}></img></a>
                <span className={`tooltip ${film?.id === 5 ? 'barbie-tool' : 'norm-tool'}`} key={film.title}>{film.title}</span>
              </div>
            )}
          </div>
        </div>

        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img className="upgrade-pic" src="https://a.ltrbxd.com/resized/sm/upload/j8/gt/r8/ss/pro-950-0-950-0-0.png?k=bc62c7df04"></img> </a>
        <div>
          <span className="popular-heading">POPULAR PEOPLE</span>
          <div className="popular-cont" id="featured-people">
            {featuredPeople.map(person =>
              person?.id && <div class="home-person-tile-cont">
                <a key={person.id} href={`/person/${person.id}`}><img src={person.featured_photo}></img></a>
                <span className='tooltip' key={person.name}>{person.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}
