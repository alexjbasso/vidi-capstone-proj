import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { getAllPeopleThunk } from "../../store/people";
import { roleAddPersonToFilmThunk } from "../../store/films";
import "./RoleAddModal.css"

export default function RoleAddModal({ film, type, person }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
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
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedRole, setSelectedRole] = useState("--select--")
  // console.log(selectedPerson)
  // console.log(selectedRole)

  useEffect(() => {
    if (user) {
      dispatch(getAllPeopleThunk());
    }
  }, [dispatch, user]);

  useEffect(() => {
    const personSelector = document.getElementById("person-select");
    if (personSelector) {
      personSelector.addEventListener("change", function () {
        setSelectedRole("")
        const selectedOption = personSelector.options[personSelector.selectedIndex];
        const objectValue = JSON.parse(selectedOption.getAttribute("data-object"));
        if (selectedOption.getAttribute("data-object") === '{"select":"select"}') {
          setSelectedPerson("")
        }
        else {
          setSelectedPerson(objectValue);
        }
      });
    }
  }, [people.length])

  if (!people.length) return <div className="add-role-cont" > <h1>Loading...</h1></div >

  let selectedPersonRoles = []
  if (selectedPerson) selectedPersonRoles = selectedPerson?.roles
  const roleOptions = { Actor: 1, Director: 2, Writer: 3, Editor: 4, Cinematographer: 5, Composer: 6 };
  if (selectedPerson.roles) {
    selectedPersonRoles.forEach(role => {
      if (role.film_id === film.id) {
        delete roleOptions[role.role]
      }
    })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const formData = { film_id: film.id, person_id: selectedPerson.id, role: selectedRole }
    const newRole = await dispatch(roleAddPersonToFilmThunk(formData))

    closeModal()
  }

  if (type === "person-to-film") {
    return (
      <div className="add-role-cont" id="person-to-film-cont">
        <h2 className="add-role-header">Add credits for:</h2>
        <h3 className="add-role-subject" id="role-film-title">{film.title}</h3>
        <form className="add-role-form" id="person-to-film-form" onSubmit={handleSubmit}>

          <label htmlFor="person-select">Select a person
            <select
              id="person-select"
              defaultValue="--select--">
              <option key="select-person-empty" value="" data-object={JSON.stringify({ 'select': 'select' })}>--select--</option>
              {people.map(person => <option key={person.id} data-object={JSON.stringify(person)}>{person.name}</option>)}
            </select>
          </label>

          <label htmlFor="role-add-film">Role
            <select
              id="role-add-film"
              defaultValue={selectedRole}
              onChange={e => setSelectedRole(e.target.value)}>
              <option key="select-role-empty" value="" selected={!selectedRole}>--select--</option>
              {Object.keys(roleOptions).map(role => <option key={role} value={role} >{role}</option>)}
            </select>
          </label>

          <div id="add-role-button-container">
            <button
              id="submit-role-button"
              type="submit"
              disabled={!selectedPerson || !selectedRole || selectedRole === "--select--"}
            >Add role
            </button>
            <button
              className="cancel-button"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    )
  }

  if (type === "film-to-person") {
    return (
      <div className="add-role-cont" id="film-to-person-cont">
        <h2 className="add-role-header">Add credits for:</h2>
        <h3 className="add-role-subject" id="role-person-name">{person.name}</h3>
        <form className="add-role-form" id="film-to-person-form">
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
