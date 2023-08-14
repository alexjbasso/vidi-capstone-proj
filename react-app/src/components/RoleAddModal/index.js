import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RoleAddModal.css"
import { getAllPeopleOfUserThunk } from "../../store/people";

export default function RoleAddModal({ film, type, person }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session?.user);
  // All people created by user sorted by first name
  const people = Object.values(useSelector(state => state.people.allPeople))
    .sort((a, b) => {
      const personA = a.name.toUpperCase();
      const personB = b.name.toUpperCase();
      if (personA < personB) return -1;
      if (personA > personB) return 1;
      return 0;
    });
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  // console.log(selectedPerson)
  // why does this line run exponentially?

  useEffect(() => {
    if (user) {
      dispatch(getAllPeopleOfUserThunk());
    }
  }, [dispatch, user]);

  useEffect(() => {
    const personSelector = document.getElementById("person-select");
    if (personSelector) {
      personSelector.addEventListener("change", function () {
        const selectedOption = personSelector.options[personSelector.selectedIndex];
        const objectValue = JSON.parse(selectedOption.getAttribute("data-object"));
        setSelectedPerson(objectValue);
      });
    }
  }, [people])

  if (!people.length) return <h1>No people.</h1>

  let selectedPersonRoles = []
  if (selectedPerson) {
    selectedPersonRoles = selectedPerson?.roles
  }
  const roleOptions = { Actor: 1, Director: 2, Writer: 3, Editor: 4, Cinematographer: 5, Composer: 6 };
  selectedPersonRoles.forEach(role => {
    if (role.film_id === film.id) {
      delete roleOptions[role.role]
    }
  })

  if (type === "person-to-film") {
    return (
      <div id="p-to-f-cont">
        <h2 id="add-role-header">Add credits for {film.title}</h2>
        <form id="person-to-film">
          <label htmlFor="person-select">Select a person:</label>
          <select
            id="person-select">
            {people.map(person => <option key={person.id} value={person} data-object={JSON.stringify(person)}>{person.name}</option>)}
          </select>
          <label htmlFor="role-add-film">Role:</label>

          <select
            id="role-add-film">
            {Object.keys(roleOptions).map(role => <option key={role} value={role} >{role}</option>)}

          </select>

        </form>
      </div>
    )
  }

  if (type === "film-to-person") {
    return (
      <div id="film-to-person-cont">
        <h2 id="add-role-header">Add credits for {person.name}.</h2>
        <form id="film-to-person">
          <label htmlFor="film-select">Select a film:</label>
          <select
            id="film-select" />
          <label htmlFor="role-add-person">Role:</label>
          <input type="text"
            id="role-add-person" />
        </form>
      </div>
    )
  }


}
