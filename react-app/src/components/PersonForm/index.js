import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPersonThunk, editPersonThunk } from "../../store/people";

export default function PersonForm({ person, type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState(person?.name);
  const [bio, setBio] = useState(person?.bio);
  const [featuredPhoto, setFeaturedPhoto] = useState(person?.featured_photo);
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})
    const formData = { name, featured_photo: featuredPhoto, bio }

    if (type === "Add") {
      person = await dispatch(addPersonThunk(formData))
      console.log(person)

    } else if (type === "Edit") {
      person = await dispatch(editPersonThunk(person, formData))
    }

    if (person.errors) {
      setErrors(person.errors)
    } else {
      history.push(`/person/${person.payload.id}`);
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
      <form id="person-form" onSubmit={handleSubmit}>
        <h1>Person {type}</h1>
        <div className="person-field">
          <div className="field-label">
            <label htmlFor="name">Name</label>
          </div>
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="person-field">
          <div className="field-label">
            <label htmlFor="bio">Bio</label>
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
            <label htmlFor="featured-photo">Featured photo</label>
          </div>
          <input
            id="featured-photo"
            type="text"
            placeholder="Featured photo"
            onChange={e => setFeaturedPhoto(e.target.value)}
            value={featuredPhoto}
          />
        </div>

        <div id="button-container">
          <button
            id="submit-button"
            type="submit"
          >{type}
          </button>
          <button
            id="cancel-button"
            onClick={handleCancelClick}>
            Cancel
          </button>
        </div>

      </form>
    </div>
  )
}
