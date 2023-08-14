import { useDispatch } from "react-redux";

export default function DeleteModal({ type, film, person }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();


  const handleDelete = async () => {
    closeModal()
  }

  const handleCancel = () => {
    closeModal();
  }

  return (
    <div className="delete-modal-container">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this {type}?</p>
      <div>
        <button className="delete-button" id="delete-button" onClick={handleDelete}>Delete</button>
        <button className="keep-button" id="keep-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}
