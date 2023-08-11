import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getFilmByIdThunk } from '../../store/films';
import "./FilmDetails.css"

export default function FilmDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const film = useSelector(state => state.films.singleFilm[id])
  const [toggledRole, setToggledRole] = useState("Actor")
  const [filteredPeople, setFilteredPeople] = useState([])

  useEffect(() => {
    dispatch(getFilmByIdThunk(id));
  }, [dispatch, id]);

// if toggled role == Actor or Actress then set to cast, else set to crew

  useEffect(() => {
    if (film) {
      setFilteredPeople(film?.roles.filter(role => role.role === toggledRole))
    }
  }, [dispatch, film, toggledRole])


  if (!film) return <h1>Film not found.</h1>

  // console.log(film)
  // console.log(filteredPeople[0])
  return (
    <div id="film-details-page-container">

      <div id="key-art-cont">
        <img src={film.key_art}></img>
      </div>

      <div id="details-right-cont">
        <div id="film-details-top">
          <div id="film-details-cont">
            <h3>{film.title}</h3>
            <h4>{film.year} Directed by {film.roles.find(role => role.role === 'Director')?.name}</h4>
            <p>{film.synopsis}</p>
            <div id="credits-cont">
              <span>
                CAST
              </span>
              <span>
                CREW
              </span>
            </div>
            <div id="credits-block">
              {filteredPeople.map(person => <a>{person.name}</a>)}
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
