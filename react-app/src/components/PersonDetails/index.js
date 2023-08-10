import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPersonByIdThunk } from '../../store/people';

export default function PersonDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(state => state.people.singlePerson[id])
  const [toggledRole, setToggledRole] = useState("Test")
  const [filteredFilms, setFilteredFilms] = useState([])

  // Adding in extra test role to this array
  const allRoles = ['Test'];
  person?.roles.forEach(role => { if (!allRoles.includes(role.role)) allRoles.push(role.role) });

  useEffect(() => {
    dispatch(getPersonByIdThunk(id));
  }, [dispatch, id]);


  useEffect(() => {
    if (person) {
      setFilteredFilms(person?.roles.filter(role => role.role === toggledRole))
    }
  }, [dispatch, person, toggledRole])


  if (!person) return <h1>This person does not exist.</h1>

  console.log(filteredFilms)


  return (
    <div id="person-page-container">

      <div id="person-films-grid-container">
        <p>{toggledRole} of</p>
        <h2>{person?.name}</h2>
        <select onChange={e => setToggledRole(e.target.value)}>
          {allRoles.map(role => role === toggledRole ? <option key={role} value={role} selected>{role}</option> : <option key={role} value={role} >{role}</option>)}
        </select>
        <div id="person-film-grid">
          {filteredFilms.map(film => <div key={film.film.title}>{film.film.title}</div>)}
        </div>
      </div>

      <div id="person-details-container">
        <img src={person.featured_photo}></img>
        <p>{person.bio}</p>
      </div>


    </div>
  )

}
