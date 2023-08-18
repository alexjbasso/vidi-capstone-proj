import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReviewThunk, editReviewThunk } from "../../store/reviews";
import "./ReviewFormModal.css"

export default function ReviewFormModal({ filmId, type, userReview }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [reviewText, setReviewText] = useState(userReview?.review_text)
  const [rating, setRating] = useState(userReview?.rating)
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})
    const errorsObj = {};

    if (reviewText && reviewText.length > 1000) errorsObj.reviewText = "Max length is 1000 characters.";
    if (rating && (rating <= 0 || rating >= 5)) errorsObj.rating = "Stop trying to break my site";

    if (Object.keys(errorsObj).length === 0) {

      const formData = new formData();
      formData.append('review_text', reviewText);
      formData.append('rating', rating);
      formData.append('film_id', filmId)
      let review = {};

      if (type === 'Add') {
        review = await dispatch(addReviewThunk(formData))
      } else if (type === 'Edit') {
        review = await dispatch(editReviewThunk(formData, userReview.id))
      }

      if (review.errors) {
        setErrors(review.errors)
      } else {
        history.push(`/review/${review.payload.id}`);
      }
    }
    else {
      setErrors(errorsObj);
    }

  }

  return (
    <div id="review-form-container">
      <h2 id="review-form-header">Leave a review</h2>
      {type}
      <form id="review-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <textarea
          id="review-text-input"
          type="textfield"
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
        </div>


      </form>
    </div>
  )
}
