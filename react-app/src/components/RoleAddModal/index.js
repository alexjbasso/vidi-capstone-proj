import "./RoleAddModal.css"

export default function RoleAddModal({ film, type, person }) {

  if (type === "person-to-film") {
    return (
      <div id="p-to-f-cont">
        <h2 id="add-role-header">Add a person to {film.title}</h2>
        <form id="person-to-film">
          <label htmlFor="person-select">Select a person:</label>
          <select
          id="film-select"/>
          <label htmlFor="role-add-film">Role:</label>
          <input type="text"
          id="role-add-film"/>
        </form>
      </div>
    )
  }

  if (type === "film-to-person") {
    return (
      <div id="film-to-person-cont">
        <h2 id="add-role-header">Add a {person.name} to a film.</h2>
        <form id="film-to-person">
          <label htmlFor="film-select">Select a film:</label>
          <select
          id="film-select"/>
          <label htmlFor="role-add-person">Role:</label>
          <input type="text"
          id="role-add-person"/>
        </form>
      </div>
    )
  }


}
