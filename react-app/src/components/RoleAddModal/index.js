import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { getAllPeopleOfUserThunk } from "../../store/people";
import { roleAddThunk } from "../../store/people";
import "./RoleAddModal.css"

export default function RoleAddModal({ film, type, person }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const user = useSelector(state => state.session?.user);
  // All people created by user sorted by first name
  const people = Object.values(useSelector(state => state.people.allUserPeople))
    .sort((a, b) => {
      const personA = a.name.toUpperCase();
      const personB = b.name.toUpperCase();
      if (personA < personB) return -1;
      if (personA > personB) return 1;
      return 0;
    });
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedRole, setSelectedRole] = useState("--select--")
  console.log(selectedPerson)
  console.log(selectedRole)
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
        setSelectedRole("")
        const selectedOption = personSelector.options[personSelector.selectedIndex];
        const objectValue = JSON.parse(selectedOption.getAttribute("data-object"));
        setSelectedPerson(objectValue);
      });
    }
  }, [people.length])

  if (!people.length) return <h1>No people.</h1>

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
    e.preventDefault();
    const formData = { film_id: film.id, person_id: selectedPerson.id, role: selectedRole }
    const newRole = await dispatch(roleAddThunk(formData))
    // console.log(newRole)

    closeModal()
  }

  if (type === "person-to-film") {
    return (
      <div className="add-role-cont" id="person-to-film-cont">
        <h2 className="add-role-header">Add credits for:</h2>
        <h3 className="add-role-subject" id="role-film-title">{film.title}</h3>
        <form className="add-role-form" id="person-to-film-form" onSubmit={handleSubmit}>
          <label htmlFor="person-select">Select a person:</label>
          <select
            id="person-select"
            defaultValue="--select--">
            <option key="select-person-empty" value="" data-object={JSON.stringify({ null: null })}>--select--</option>
            {people.map(person => <option key={person.id} data-object={JSON.stringify(person)}>{person.name}</option>)}
          </select>
          <label htmlFor="role-add-film">Role:</label>

          <select
            id="role-add-film"
            defaultValue={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}>
            <option key="select-role-empty" value="" selected={!selectedRole}>--select--</option>
            {Object.keys(roleOptions).map(role => <option key={role} value={role} >{role}</option>)}
          </select>

          <div className="add-role-buttons">
            <button
              id="submit-button"
              type="submit"
              disabled={!selectedPerson || selectedPerson === { null: null } || !selectedRole || selectedRole === "--select--"}
            >Add role
            </button>
            <button
              id="cancel-button"
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
