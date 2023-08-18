import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getFilmByIdThunk } from '../../store/films';
import { getAllReviewsOfFilmThunk } from "../../store/reviews";
import RoleAddButton from '../RoleAddButton';
import RoleAddModal from '../RoleAddModal';
import ReviewFormButton from "../ReviewFormButton"
import ReviewFormModal from '../ReviewFormModal';
import "./FilmDetails.css"

export default function FilmDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const film = useSelector(state => state.films.singleFilm[id])
  const reviews = useSelector(state => state.reviews?.allFilmReviews)
  const user = useSelector((state) => state.session?.user);
  let userReview;
  if (user) {
    userReview = Object.values(reviews).find(review => review.user.id === user.id)
  }
  const [toggledRole, setToggledRole] = useState("CAST")

  const directToPerson = (id, role) => {
    history.push({
      pathname: `/person/${id}`,
      role
    });
  }

  useEffect(() => {
    dispatch(getFilmByIdThunk(id));
    dispatch(getAllReviewsOfFilmThunk(id));
    console.log(film?.avg_rating)
  }, [dispatch, id, Object.values(reviews).length, userReview?.rating]);

  if (!film) return <h1>Film not found.</h1>

  const cast = film.roles.filter(person => person.role === 'Actress' || person.role === 'Actor')
  const directors = film.roles.filter(person => person.role === 'Director')
  const writers = film.roles.filter(person => person.role === 'Writer')
  const cines = film.roles.filter(person => person.role === 'Cinematographer')
  const editors = film.roles.filter(person => person.role === 'Editor')
  const composers = film.roles.filter(person => person.role === 'Composer')
  const dirNames = directors.map(director => director.name)

  const starCalc = (rating) => {
    const stars = [];
    if (rating === 0) {
      for (let i = 0; i < 5; i++) {
        stars.push(<i className="fa-solid fa-star" key={i} style={{ color: "#grey" }}></i>)
      }
    } else {
      for (let i = 0; i < rating; i++) {
        stars.push(<i className="fa-solid fa-star" key={i} style={{ color: "#00E054" }}></i>)
      }
    }
    return stars;
  }


  return (
    <div id="film-details-page-container">

      <div id="key-art-cont">
        <img src={film.key_art}></img>
        <p id="genre-text">{film.genre}</p>
      </div>

      <div id="details-right-cont">
        <div id="film-details-top">
          <div id="film-details-cont">
            <h2 id="title-heading">{film.title.toUpperCase()}</h2>
            {directors.length ? <h4 id="director-heading">Directed by {dirNames.join(', ')}</h4> : null}
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
              {user && <RoleAddButton className="role-add-button" modalComponent={<RoleAddModal film={film} type="person-to-film" />} />}
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
            <div className="rater-row">
              Watched?
            </div>
            <span className="seperator"></span>
            <div className="rater-row" id="your-rating-row">

              {Object.values(reviews).length ?
                <div id="your-rating-block">
                  <span>Average rating</span>
                  <div id="avg-rating-stars">{starCalc(film.avg_rating)}</div>
                </div> :
                'No ratings yet'
              }

            </div>
            <span className="seperator"></span>
            <div className="rater-row">
              {user ?
                <ReviewFormButton type={userReview ? 'Edit' : 'Add'} modalComponent={<ReviewFormModal filmId={film.id} userReview={userReview} type={userReview ? 'Edit' : 'Add'} />} />
                : "Log in to leave a review"}
            </div>
            <span className="seperator"></span>
            <div className="rater-row">
              Share
            </div>
          </div>
        </div>

        {Object.values(reviews).length ? <div id="reviews-cont">
          <span id="review-header">REVIEWS</span>
          {Object.values(reviews).map(review =>
            <div key={review.id} className="review-block">
              <p className="review-attrib">Review by <span className="review-user">{review.user.username}</span> {starCalc(review.rating)}</p>
              <p className="review-text">{review.review_text}</p>
            </div>)}
        </div> : null}

      </div>


    </div>
  )
}
