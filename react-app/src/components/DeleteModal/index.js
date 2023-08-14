import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./DeleteModal.css";
import { deleteFilmThunk } from "../../store/films";
import { deletePersonThunk } from "../../store/people";

export default function DeleteModal({ type, filmId, personId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = async () => {
    if (type === 'film') {
      dispatch(deleteFilmThunk(filmId));
    } else if (type === 'person') {
      dispatch(deletePersonThunk(personId));
    }
    closeModal()
  }

  const handleCancel = () => {
    closeModal();
  }

  return (
    <div className="delete-modal-container">
      <h2>Confirm Delete</h2>
      <p id="delete-message">Are you sure you want to delete this {type}?</p>
      <div>
        <button className="delete-button" id="delete-button" onClick={handleDelete}>Delete</button>
        <button className="keep-button" id="keep-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}
