import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getFilmByIdThunk } from '../../store/films';
import "./FilmDetails.css"

export default function FilmDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const film = useSelector(state => state.films.singleFilm[id])
  const [toggledRole, setToggledRole] = useState("CAST")

  useEffect(() => {
    dispatch(getFilmByIdThunk(id));
  }, [dispatch, id]);


  if (!film) return <h1>Film not found.</h1>

  const cast = film.roles.filter(person => person.role === 'Actress' || person.role === 'Actor')
  const directors = film.roles.filter(person => person.role === 'Director')
  const writers = film.roles.filter(person => person.role === 'Writer')
  const cines = film.roles.filter(person => person.role === 'Cinematographer')
  const editors = film.roles.filter(person => person.role === 'Editor')
  const composers = film.roles.filter(person => person.role === 'Composer')

  console.log(film)

  return (
    <div id="film-details-page-container">

      <div id="key-art-cont">
        <img src={film.key_art}></img>
      </div>

      <div id="details-right-cont">
        <div id="film-details-top">
          <div id="film-details-cont">
            <h2 id="title-heading">{film.title}</h2>
            <h4>{film.year} Directed by {film.roles.find(role => role.role === 'Director')?.name}</h4>
            <p>{film.synopsis}</p>
            <div id="credits-cont">
              <span className="credit-toggle"
              onClick={() => setToggledRole("CAST")}
              style={{ color: toggledRole === "CAST" ? "rgb(0, 224, 84)" : "white" }}>
                CAST
              </span>
              <span className="credit-toggle"
              onClick={() => setToggledRole("CREW")}
              style={{ color: toggledRole === "CREW" ? "rgb(0, 224, 84)" : "white" }}>
                CREW
              </span>
            </div>
            <div id="credits-block">

              {toggledRole === "CAST" ? <div id="cast-block">
                {cast.map(person => <a key={person.name} href={`/person/${person.person_id}`}>{person.name}</a>)}
              </div> : null}

              {toggledRole === "CREW" ? <div id="crew-block">

                {directors.length ?
                  <div className="crew-line">
                    <span className="role-text">DIRECTOR</span>
                    <div className="crew-members">
                      {directors.map(person => <a key={person.name} href={`/person/${person.person_id}`}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {writers.length ?
                  <div className="crew-line">
                    <span className="role-text">{writers.length > 1 ? "WRITERS" : "WRITER"}</span>
                    <div className="crew-members">
                      {writers.map(person => <a key={person.name} href={`/person/${person.person_id}`}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {editors.length ?
                  <div className="crew-line">
                    <span className="role-text">{editors.length > 1 ? "EDITORS" : "EDITOR"}</span>
                    <div className="crew-members">
                      {editors.map(person => <a key={person.name} href={`/person/${person.person_id}`}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {cines.length ?
                  <div className="crew-line">
                    <span className="role-text">CINEMATOGRAPHY</span>
                    <div className="crew-members">
                      {cines.map(person => <a key={person.name} href={`/person/${person.person_id}`}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {composers.length ?
                  <div className="crew-line">
                    <span className="role-text">{composers.length > 1 ? "COMPOSERS" : "COMPOSER"}</span>
                    <div className="crew-members">
                      {composers.map(person => <a key={person.name} href={`/person/${person.person_id}`}>{person.name}</a>)}
                    </div>
                  </div> : null}


              </div> : null}
            </div>
            <p>{film.duration} mins</p>
          </div>

          <div id="rater-cont">
            <button>Watch Button</button>
          </div>

        </div>

        <div id="reviews-cont">
          Reviews here
        </div>

      </div>


    </div>
  )
}
