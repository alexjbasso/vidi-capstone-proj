import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getFilmByIdThunk } from '../../store/films';
import RoleAddButton from '../RoleAddButton';
import RoleAddModal from '../RoleAddModal';
import "./FilmDetails.css"

export default function FilmDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const film = useSelector(state => state.films.singleFilm[id])
  const [toggledRole, setToggledRole] = useState("CAST")

  const directToPerson = (id, role) => {
    history.push({
      pathname: `/person/${id}`,
      role
    });
  }

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
  const reviews = film.reviews
  const dirNames = directors.map(director => director.name)

  // const usersPeople = film.roles.filter(person => person.role === 'Composer')

  return (
    <div id="film-details-page-container">

      <div id="key-art-cont">
        <img src={film.key_art}></img>
      </div>

      <div id="details-right-cont">
        <div id="film-details-top">
          <div id="film-details-cont">
            <h2 id="title-heading">{film.title}</h2>
            {directors.length ? <h4>Directed by {dirNames.join(', ')}</h4> : null}
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
              <RoleAddButton className="role-add-button" modalComponent={<RoleAddModal film={film} type="person-to-film"/>}/>
            </div>
            <div id="credits-block">

              {toggledRole === "CAST" ? <div id="cast-block">
                {cast.map(person => <a key={person.name} onClick={() => directToPerson(person.person_id, "Actor")}>{person.name}</a>)}
              </div> : null}

              {toggledRole === "CREW" ? <div id="crew-block">

                {directors.length ?
                  <div className="crew-line">
                    <span className="role-text">DIRECTOR</span>
                    <div className="crew-members">
                      {directors.map(person => <a key={person.name} onClick={() => directToPerson(person.person_id, "Director")}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {writers.length ?
                  <div className="crew-line">
                    <span className="role-text">{writers.length > 1 ? "WRITERS" : "WRITER"}</span>
                    <div className="crew-members">
                      {writers.map(person => <a key={person.name} onClick={() => directToPerson(person.person_id, "Writer")}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {editors.length ?
                  <div className="crew-line">
                    <span className="role-text">{editors.length > 1 ? "EDITORS" : "EDITOR"}</span>
                    <div className="crew-members">
                      {editors.map(person => <a key={person.name} onClick={() => directToPerson(person.person_id, "Editor")}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {cines.length ?
                  <div className="crew-line">
                    <span className="role-text">CINEMATOGRAPHY</span>
                    <div className="crew-members">
                      {cines.map(person => <a key={person.name} onClick={() => directToPerson(person.person_id, "Cinematographer")}>{person.name}</a>)}
                    </div>
                  </div> : null}

                {composers.length ?
                  <div className="crew-line">
                    <span className="role-text">{composers.length > 1 ? "COMPOSERS" : "COMPOSER"}</span>
                    <div className="crew-members">
                      {composers.map(person => <a key={person.name} onClick={() => directToPerson(person.person_id, "Composer")}>{person.name}</a>)}
                    </div>
                  </div> : null}

              </div> : null}
            </div>
            <p>{film.year} • {film.duration} mins</p>
          </div>

          <div id="rater-cont">
            <button>Watch Button</button>
          </div>

        </div>

        {reviews.length ? <div id="reviews-cont">
          <span id="review-header">REVIEWS</span>
          {reviews.map(review =>
            <div key={review.id} className="review-block">
              <p className="review-attrib">Review by <span className="review-user">{review.user.username}</span> • {review.rating} Stars</p>
              <p className="review-text">{review.review_text}</p>
            </div>)}
        </div> : null}

      </div>


    </div>
  )
}
