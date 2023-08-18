import React from 'react';
import { useModal } from '../../context/Modal';
import "./ReviewFormButton.css";

export default function ReviewFormButton({
  modalComponent, // component to render inside the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose,
  type // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <a style={{color: "#bcd" }} className="review-form-button" onClick={onClick}>{type === 'Add' ? 'Leave a review': 'Edit your review'}</a>
  );
}
