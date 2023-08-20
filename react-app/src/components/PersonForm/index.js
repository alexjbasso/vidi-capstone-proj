import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPersonThunk, editPersonThunk } from "../../store/people";
import "./PersonForm.css"

export default function PersonForm({ person, type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState(person?.name);
  const [bio, setBio] = useState(person?.bio);
  const [featuredPhoto, setFeaturedPhoto] = useState("");
  const [errors, setErrors] = useState({});
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const errorsObj = {};

    if (name && name.length > 200) errorsObj.name = "Length must not exceed 200 characters.";
    if (bio && bio.length > 1000) errorsObj.bio = "Length must not exceed 1000 characters.";
    if (featuredPhoto && !imageExtensions.test(featuredPhoto.name)) errorsObj.featuredPhoto = "File must end in .jpg, .jpeg, .png, .gif, .bmp, or .svg."

    if (Object.keys(errorsObj).length === 0) {
      const formData = new FormData();
      formData.append('name', name);
      if (bio) formData.append('bio', bio);
      if (featuredPhoto) formData.append('featured_photo', featuredPhoto);

      if (type === "Add") {
        person = await dispatch(addPersonThunk(formData))
      } else if (type === "Edit") {
        person = await dispatch(editPersonThunk(person, formData))
      }

      if (person.errors) {

        setErrors(person.errors)
      } else {
        history.push(`/person/${person.payload.id}`);
      }
    } else {
      setErrors(errorsObj);
    }
  }

  const handleCancelClick = (e) => {
    if (type === 'Edit') {
      history.push(`/profile`);
    }
    else {
      history.goBack();
    }
  }

  return (
    <div id="person-form-container">
      <form id="person-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>{type} a person</h1>
        <div className="person-field">
          <div className="field-label">
            <label htmlFor="name">Name</label>
            {errors.name ? <p className="errors">{errors.name}</p> : null}
          </div>
          <input
            id="name"
            type="text"
            placeholder="Name*"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="person-field">
          <div className="field-label">
            <label htmlFor="bio">Bio</label>
            {errors.bio ? <p className="errors">{errors.bio}</p> : null}
          </div>
          <input
            id="bio"
            type="text"
            placeholder="Bio"
            onChange={e => setBio(e.target.value)}
            value={bio}
          />
        </div>

        <div className="person-field">
          <div className="field-label">
            <label htmlFor="featured-photo">Featured Photo</label>
            {errors.featuredPhoto ? <p className="errors">{errors.featuredPhoto}</p> : null}
          </div>
          <input
            id="featured-photo"
            type="file"
            accept="image/*"
            placeholder="URL"
            onChange={e => setFeaturedPhoto(e.target.files[0])}
          />
        </div>

        <div id="people-button-container">
          <button
            id="submit-person-button"
            type="submit"
            disabled={!name}
          >{type}
          </button>
          <button
            className="cancel-button"
            onClick={handleCancelClick}>
            Cancel
          </button>
        </div>

      </form>
    </div>
  )
}
