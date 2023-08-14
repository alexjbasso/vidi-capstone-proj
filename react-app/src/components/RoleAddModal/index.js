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
  }, [people])

  if (!people.length) return <h1>No people.</h1>

  let selectedPersonRoles = []
  if (selectedPerson) selectedPersonRoles = selectedPerson?.roles
  const roleOptions = { "--select--": 0, Actor: 1, Director: 2, Writer: 3, Editor: 4, Cinematographer: 5, Composer: 6 };
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
      <div id="p-to-f-cont">
        <h2 id="add-role-header">Add credits for {film.title}</h2>
        <form id="person-to-film" onSubmit={handleSubmit}>
          <label htmlFor="person-select">Select a person:</label>
          <select
            id="person-select"
            defaultValue="--select--">
            <option key="select" value="" data-object={JSON.stringify({ null: null })}>--select--</option>
            {people.map(person => <option key={person.id} value={person} data-object={JSON.stringify(person)}>{person.name}</option>)}
          </select>
          <label htmlFor="role-add-film">Role:</label>

          <select
            id="role-add-film"
            defaultValue={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}>
            {Object.keys(roleOptions).map(role => <option key={role} value={role} >{role}</option>)}
          </select>

          <button
            id="submit-button"
            type="submit"
            disabled={!selectedPerson || selectedPerson == { null: null } || !selectedRole || selectedRole === "--select--"}
          >Add role
          </button>
          <button
            id="cancel-button"
            onClick={() => closeModal()}
          >
            Cancel
          </button>

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
