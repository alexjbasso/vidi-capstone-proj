import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPeopleAction, getAllPeopleOfUserThunk } from "../../store/people";
import { clearFilmsAction, getAllFilmsOfUserThunk } from "../../store/films";
import { getAllReviewsOfUserThunk } from "../../store/reviews";
import DeleteModalButton from "../DeleteModalButton";
import DeleteModal from "../DeleteModal";
import { starCalc } from "../helpers";
import "./Profile.css";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session?.user);
  const films = Object.values(useSelector(state => state.films?.allUserFilms))
  const people = Object.values(useSelector(state => state.people?.allUserPeople))
  const reviews = Object.values(useSelector(state => state.reviews?.allUserReviews))

  const [hoveredFilm, setHoveredFilm] = useState(-1);
  const [hoveredPerson, setHoveredPerson] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (user) {
      await dispatch(getAllFilmsOfUserThunk());
      await dispatch(getAllPeopleOfUserThunk());
      await dispatch(getAllReviewsOfUserThunk());
      setIsLoading(false);
    }
  }, [dispatch, user]);

  // Refresh reviews after film delete
  useEffect(() => {
    if (user) dispatch(getAllReviewsOfUserThunk());
  }, [films.length])

  if (!user) return <h1>You need to be logged in to view this page.</h1>

  if (isLoading === true) return <h1>Loading...</h1>

  return (
    <div id="profile-container">
      <h1 id="manage-welcome">Hello, {user.username}</h1>

      <h2 id="manage-header">Manage your content</h2>
      <div id="user-uploads-cont">

        <div className="manage-items-cont" id="user-films-cont">
          <span className="profile-section-header">FILMS{user && <a href="film/new"><i className="fa fa-plus add-film"></i></a>} </span>
          <div className="manage-items-grid" id="user-films-grid">
            {films.length ? films.map((film, i) =>
              <div className="tile-container-profile"
                onMouseEnter={() => setHoveredFilm(i)}
                onMouseLeave={() => setHoveredFilm(-1)}
              >
                <a href={`/film/${film.id}`}><img src={film.key_art}></img></a>
                <div className="UD-buttons-cont" style={{ display: hoveredFilm === i ? 'flex' : 'none' }}>
                  <a href={`/film/${film.id}/edit`}><i className="fa fa-edit profile-UD-button"></i></a>
                  <DeleteModalButton modalComponent={<DeleteModal className="profile-UD-button" type='film' filmId={film.id} id={film.id} />} />
                </div>
              </div>
            ) : <span className="none-found-text">No films.</span>}
          </div>
        </div>

        <div className="manage-items-cont" id="user-people-cont">
          <span className="profile-section-header">PEOPLE{user && <a href="person/new"><i className="fa fa-plus add-person"></i></a>} </span>
          <div className="manage-items-grid" id="user-people-grid">
            {people.length ? people.map((person, i) =>
              <div className="tile-container-profile"
                onMouseEnter={() => setHoveredPerson(i)}
                onMouseLeave={() => setHoveredPerson(-1)}>
                <a href={`/person/${person.id}`}><img src={person.featured_photo}></img></a>
                <div className="UD-buttons-cont" style={{ display: hoveredPerson === i ? 'flex' : 'none' }}>
                  <a href={`/person/${person.id}/edit`}><i className="fa fa-edit profile-UD-button"></i></a>
                  <div className="profile-UD-button">
                    <DeleteModalButton modalComponent={<DeleteModal type='person' personId={person.id} id={person.id} />} />
                  </div>
                </div>
              </div>
            ) : <span className="none-found-text">No people.</span>}
          </div>
        </div>


        <div className="manage-items-cont" id="user-reviews-cont">
          <span className="profile-section-header">REVIEWS </span>
          <div className="manage-items-grid" id="user-reviews-grid">
            {reviews.length ? reviews.map((review, i) =>
              <a href={`/film/${review.film.id}`} className="tile-container-profile profile-reviews-cont" style={{ borderBottom: i === reviews.length - 1 ? 'none' : '1px solid rgb(102, 119, 136)' }}>
                <img id="profile-review-art" src={review.film.key_art}></img>
                <div className="profile-review-details">
                  <span className="review-film-title">{review.film.title} <span className="review-film-year">{review.film.year}</span></span>
                  <span className="review-film-rating">{starCalc(review.rating)}</span>
                  <p>{review.review_text}</p>
                </div>
              </a>
            ) : <span className="none-found-text">No reviews.</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
