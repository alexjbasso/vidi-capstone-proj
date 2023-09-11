import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFilmThunk, editFilmThunk } from "../../store/films";
import "./FilmForm.css"

export default function FilmForm({ film, type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(film?.title);
  const genres = film?.genre.split(", ");
  const [genre1, setGenre1] = useState(genres && genres[0] ? genres[0] : null);
  const [genre2, setGenre2] = useState(genres && genres[1] ? genres[1] : null);
  const [genre3, setGenre3] = useState(genres && genres[2] ? genres[2] : null);
  const [year, setYear] = useState(film?.year);
  const [duration, setDuration] = useState(film?.duration);
  const [synopsis, setSynopsis] = useState(film?.synopsis);
  const [key_art, setKeyArt] = useState("");
  const [cover_photo, setCoverPhoto] = useState("");
  const [errors, setErrors] = useState({});
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const errorsObj = {};

    if (title && title.length > 200) errorsObj.title = "Length must not exceed 200 characters.";
    if (genre1 && genre1.includes(",")) errorsObj.genre = "Genre must only contain letters.";
    if (genre2 && genre2.includes(",")) errorsObj.genre = "Genre must only contain letters.";
    if (genre3 && genre3.includes(",")) errorsObj.genre = "Genre must only contain letters.";
    if (year && (year <= 0 || year > 2050)) errorsObj.year = "Please enter a valid year.";
    if (duration && duration <= 0) errorsObj.duration = "Please enter a valid duration."
    if (synopsis && synopsis.length > 1000) errorsObj.synopsis = "Length must not exceed 1000 characters.";
    if (key_art && !imageExtensions.test(key_art.name)) errorsObj.key_art = "File must end in .jpg, .jpeg, .png, .gif, .bmp, or .svg."
    if (cover_photo && !imageExtensions.test(cover_photo.name)) errorsObj.cover_photo = "File must end in .jpg, .png, .gif, .bmp, or .svg."


    if (Object.keys(errorsObj).length === 0) {
      const genre = [genre1, genre2, genre3].filter(Boolean);
      const formData = new FormData();
      formData.append('title', title)
      formData.append('genre', genre.join(", "))
      formData.append('year', year)
      formData.append('duration', duration)
      formData.append('synopsis', synopsis)
      formData.append('key_art', key_art)
      formData.append('cover_photo', cover_photo)

      if (type === "Add") {
        film = await dispatch(addFilmThunk(formData))
      } else if (type === "Edit") {
        film = await dispatch(editFilmThunk(film, formData))
      }

      if (film.errors) {
        setErrors(film.errors)
      } else {
        history.push(`/film/${film.payload.id}`);
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
    <div id="film-form-container">
      <form id="film-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>{type} a film</h1>
        <div className="film-field">
          <div className="field-label">
            <label htmlFor="title">Title</label>
            {errors.title ? <p className="errors">{errors.title}</p> : null}
          </div>
          <input
            id="title"
            type="text"
            placeholder="Title*"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="genre">Genre</label>
            {errors.genre ? <p className="errors">{errors.genre}</p> : null}
          </div>
          <input
            id="genre"
            type="text"
            placeholder="Genre*"
            onChange={e => setGenre1(e.target.value)}
            value={genre1}
            required
          />
        </div>

        <div className="film-field">
          <div className="field-label">
          </div>
          <input
            id="genre"
            type="text"
            placeholder="Genre"
            onChange={e => setGenre2(e.target.value)}
            value={genre2}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
          </div>
          <input
            id="genre"
            type="text"
            placeholder="Genre"
            onChange={e => setGenre3(e.target.value)}
            value={genre3}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="year">Year</label>
            {errors.year ? <p className="errors">{errors.year}</p> : null}
          </div>
          <input
            id="year"
            type="number"
            placeholder="Year*"
            onChange={e => setYear(e.target.value)}
            value={year}
            required
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="duration">Duration</label>
            {errors.duration ? <p className="errors">{errors.duration}</p> : null}
          </div>
          <input
            id="duration"
            type="number"
            placeholder="Duration*"
            onChange={e => setDuration(e.target.value)}
            value={duration}
            required
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="synopsis">Synopsis</label>
            {errors.synopsis ? <p className="errors">{errors.synopsis}</p> : null}
          </div>
          <textarea
            id="synopsis"
            rows="4"
            cols="33"
            placeholder="Synopsis*"
            onChange={e => setSynopsis(e.target.value)}
            value={synopsis}
            required
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="key-art">Key Art</label>
            {errors.key_art ? <p className="errors">{errors.key_art}</p> : null}
          </div>
          <input
            id="key-art"
            type="file"
            accept="image/*"
            placeholder="URL*"
            onChange={e => setKeyArt(e.target.files[0])}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="cover_photo">Cover Photo</label>
            {errors.cover_photo ? <p className="errors">{errors.cover_photo}</p> : null}
          </div>
          <input
            id="cover_photo"
            type="file"
            accept="image/*"
            placeholder="URL"
            onChange={e => setCoverPhoto(e.target.files[0])}
          />
        </div>

        <div id="film-button-container">
          <button
            id="submit-film-button"
            type="submit"
            disabled={!title || (!genre1 && !genre2 && !genre3) || !year || !duration || !synopsis || (type === 'Add' && !key_art)}
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
