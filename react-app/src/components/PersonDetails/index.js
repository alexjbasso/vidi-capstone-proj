import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPersonByIdThunk } from '../../store/people';
import "./PersonDetails.css"

export default function PersonDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(state => state.people.singlePerson[id])
  const [toggledRole, setToggledRole] = useState("Actor")
  const [filteredFilms, setFilteredFilms] = useState([])

  // Adding in extra test role to this array
  const allRoles = ['Test'];
  person?.roles.forEach(role => { if (!allRoles.includes(role.role)) allRoles.push(role.role) });

  const roleHeader = () => {
    let string = ""
    if (toggledRole === 'Actor' || toggledRole === 'Actress') string = "STARRING";
    else if (toggledRole === 'Director') string = 'DIRECTED BY';
    else if (toggledRole === 'Writer') string = 'WRITTEN BY';
    else if (toggledRole === 'Producer') string = 'PRODUCED BY';
    else if (toggledRole === 'Director') string = 'DIRECTED BY';
    else if (toggledRole === 'Editor') string = 'EDITED BY';
    else if (toggledRole === 'Cinematographer') string = 'SHOT BY';
    else if (toggledRole === 'Composer') string = 'WITH MUSIC COMPOSED BY';

    return `FILMS ${string}`
  }

  useEffect(() => {
    dispatch(getPersonByIdThunk(id));
  }, [dispatch, id]);


  useEffect(() => {
    if (person) {
      setFilteredFilms(person?.roles.filter(role => role.role === toggledRole))
    }
  }, [dispatch, person, toggledRole])


  if (!person) return <h1>This person does not exist.</h1>

  return (
    <div id="person-page-container">

      <div id="person-films-container">
        <p id="role-header">{roleHeader()}</p>
        <h2 id="person-name">{person?.name}</h2>
        <div id="select-container">
          <select id="role-selector" onChange={e => setToggledRole(e.target.value)} defaultValue={toggledRole}>
            {allRoles.map(role => <option key={role} value={role} >{role}</option>)}
          </select>
        </div>

        <div id="person-film-grid">
          {filteredFilms.map(film =>
            <div className="film-cont" key={film.film.title}>
              <a href={`/film/${film.film.id}`}>
                <img className="film-grid-img" src={film.film.key_art} />
              </a>
              <span className="tooltip" key={film.film.title}>{film.film.title}</span>
            </div>
          )}
        </div>
      </div>

      <div id="person-details-container">
        <img id="person-ft-photo" src={person.featured_photo}></img>
        <p>{person.bio}</p>
      </div>


    </div>
  )

}
