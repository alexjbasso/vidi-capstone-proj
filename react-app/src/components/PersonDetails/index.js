import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPersonByIdThunk } from '../../store/people';
import RoleAddButton from '../RoleAddButton';
import RoleAddModal from '../RoleAddModal';
import "./PersonDetails.css"

export default function PersonDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(state => state.people.singlePerson[id])
  const location = useLocation();
  const [toggledRole, setToggledRole] = useState(location?.role)
  const [filteredFilms, setFilteredFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const allRoles = [];
  person?.roles.forEach(role => { if (!allRoles.includes(role.role)) allRoles.push(role.role) });

  useEffect(() => {
    if (!toggledRole) {
      setToggledRole(allRoles[0])
    }
  }, [allRoles])


  // Helper function, can be moved to own file
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
    else if (!toggledRole) return ''

    return `FILMS ${string}`
  }

  useEffect(async () => {
    await dispatch(getPersonByIdThunk(id));
    setIsLoading(false);
  }, [dispatch, id]);


  useEffect(() => {
    if (person) {
      setFilteredFilms(person?.roles.filter(role => role.role === toggledRole))
    }
  }, [dispatch, person, toggledRole])


  if (isLoading === true) return <h1>Loading...</h1>
  if (!person) return <h1>This person does not exist.</h1>

  return (
    <div id="person-page-container">

      <div id="person-films-container">
        <p id="role-header">{roleHeader()}</p>
        <h2 id="person-name">{person?.name}</h2>
        <div id="select-container">
          {allRoles.length ? <select id="role-selector" onChange={e => setToggledRole(e.target.value)} defaultValue={toggledRole}>
            {allRoles.map(role => <option key={role} value={role} >{role}</option>)}
          </select> : <span id="role-selector">&nbsp;</span>}
          {/* <RoleAddButton className="role-add-button" modalComponent={<RoleAddModal person={person} type="film-to-person"/>}/> */}
        </div>

        <div id="person-film-grid">
          {filteredFilms.length ? filteredFilms.map(film =>
            <div className={`film-cont ${film.film.title === 'Barbie' ? 'barbie-cont' : 'norm-cont'}`} key={film.film.title}>
              <a href={`/film/${film.film.id}`}>
                <img className="film-grid-img" src={film.film.key_art} />
              </a>
              <span className={`tooltip ${film.film.title === 'Barbie' ? 'barbie-tool' : 'norm-tool'}`} key={film.film.title}>{film.film.title}</span>
            </div>
          ) : <span style={{ color: "#99AABB" }}>No films.</span>}
        </div>
      </div>

      <div id="person-details-container">
        <img id="person-ft-photo" src={person.featured_photo}></img>
        <p>{person.bio}</p>
      </div>


    </div>
  )

}
