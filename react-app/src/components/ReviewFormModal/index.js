import { useState } from "react";
import { useModal } from "../../context/Modal";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReviewThunk, editReviewThunk } from "../../store/reviews";
import StarsRatingInput from "../StarRating/StarRatingInput";
import "./ReviewFormModal.css"

export default function ReviewFormModal({ filmId, type, userReview }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [reviewText, setReviewText] = useState(userReview?.review_text)
  const [rating, setRating] = useState(userReview?.rating)
  const [errors, setErrors] = useState({});

  const onChange = (number) => {
    setRating(parseInt(number));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})
    const errorsObj = {};

    if (reviewText && reviewText.length > 1000) errorsObj.reviewText = "Max length is 1000 characters.";
    if (rating && (rating <= 0 || rating > 5)) errorsObj.rating = "Stop trying to break my site";

    if (Object.keys(errorsObj).length === 0) {

      const formData = new FormData();
      formData.append('review_text', reviewText);
      formData.append('rating', rating);
      formData.append('film_id', filmId)
      let review = {};

      if (type === 'Add') {
        review = await dispatch(addReviewThunk(formData))
      } else if (type === 'Edit') {
        review = await dispatch(editReviewThunk(userReview, formData))
      }

      if (review.errors) {
        setErrors(review.errors)
      } else {
        closeModal()
      }
    }
    else {
      setErrors(errorsObj);
    }

  }

  return (
    <div id="review-form-container">
      <h2 id="review-form-header">{type === 'Add' ? 'Leave a review' : 'Edit your review'}</h2>
      <form id="review-form" onSubmit={handleSubmit} encType="multipart/form-data">

        <StarsRatingInput
          onChange={onChange}
          rating={rating} />

        <textarea
          id="review-text-input"
          placeholder="Type your review..."
          rows="5"
          cols="33"
          onChange={e => setReviewText(e.target.value)}
          value={reviewText}
          required
        />

        <div id="review-buttons-container">
          <button
            id="submit-review-button"
            type="submit"
            disabled={!reviewText || !rating}
          >{type}
          </button>
          <button
            className="cancel-button"
            onClick={closeModal}>
            Cancel
          </button>
        </div>


      </form>
    </div>
  )
}
