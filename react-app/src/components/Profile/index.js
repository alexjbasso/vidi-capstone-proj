import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPeopleOfUserThunk } from "../../store/people";
import { getAllFilmsOfUserThunk } from "../../store/films";
import DeleteModalButton from "../DeleteModalButton";
import DeleteModal from "../DeleteModal";
import "./Profile.css";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session?.user);
  const films = Object.values(useSelector(state => state.films.allFilms));
  const people = Object.values(useSelector(state => state.people.allPeople));
  const [hoveredFilm, setHoveredFilm] = useState(-1);
  const [hoveredPerson, setHoveredPerson] = useState(-1);

  useEffect(() => {
    if (user) {
      dispatch(getAllFilmsOfUserThunk());
      dispatch(getAllPeopleOfUserThunk());
    }
  }, [dispatch, user]);

  if (!user) return <h1>You need to be logged in to view this page.</h1>

  return (
    <div id="profile-container">
      <h1 id="manage-welcome">Hello, {user.username}</h1>

      <h2 id="manage-header">Manage your uploads</h2>
      <div id="user-uploads-cont">

        <div className="manage-items-cont" id="user-films-cont">
          <span>FILMS</span>
          <div className="manage-items-grid" id="user-films-grid">
            {films && films.map((film, i) =>
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
            )}
          </div>
        </div>

        <div className="manage-items-cont" id="user-people-cont">
          <span>PEOPLE</span>
          <div className="manage-items-grid" id="user-people-grid">
            {people && people.map((person, i) =>
              <div className="tile-container-profile"
                onMouseEnter={() => setHoveredPerson(i)}
                onMouseLeave={() => setHoveredPerson(-1)}>
                <a href={`/person/${person.id}`}><img src={person.featured_photo}></img></a>
                <div className="UD-buttons-cont" style={{ display: hoveredPerson === i ? 'flex' : 'none' }}>
                  <a href={`/person/${person.id}/edit`}><i className="fa fa-edit profile-UD-button"></i></a>
                  <DeleteModalButton modalComponent={<DeleteModal className="profile-UD-button" type='person' personId={person.id} id={person.id} />} />
                </div>
              </div>
            )}
          </div>
        </div>



      </div>







    </div>
  )
}
