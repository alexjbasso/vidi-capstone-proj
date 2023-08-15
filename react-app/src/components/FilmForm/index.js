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
  const [key_art, setKeyArt] = useState(film?.key_art);
  const [cover_photo, setCoverPhoto] = useState(film?.cover_photo);
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})
    const errorsObj = {};

    if (title && title.length > 200) errorsObj.title = "Length must not exceed 200 characters.";
    if (genre1 && genre1.includes(",")) errorsObj.genre = "Genre must only contain letters.";
    if (genre2 && genre2.includes(",")) errorsObj.genre = "Genre must only contain letters.";
    if (genre3 && genre3.includes(",")) errorsObj.genre = "Genre must only contain letters.";
    if (year && (year < 0 || year > 2050)) errorsObj.year = "Please enter a valid year.";
    if (duration && duration <= 0) errorsObj.duration = "Please enter a valid duration."
    if (synopsis && synopsis.length > 1000) errorsObj.synopsis = "Length must not exceed 1000 characters.";
    if (key_art && (!key_art.endsWith('.jpg') && !key_art.endsWith('.png') && !key_art.endsWith('.gif') && !key_art.endsWith('.bmp') && !key_art.endsWith('.svg'))) errorsObj.key_art = "URL must end in .jpg, .png, .gif, .bmp, or .svg."
    if (cover_photo && (!cover_photo.endsWith('.jpg') && !cover_photo.endsWith('.png') && !cover_photo.endsWith('.gif') && !cover_photo.endsWith('.bmp') && !cover_photo.endsWith('.svg'))) errorsObj.cover_photo = "URL must end in .jpg, .png, .gif, .bmp, or .svg."

    if (Object.keys(errorsObj).length === 0) {
      const genre = [genre1, genre2, genre3].filter(Boolean);

      const formData = { title, genre: genre.join(", "), year, duration, synopsis, key_art, cover_photo }

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
      <form id="film-form" onSubmit={handleSubmit}>
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
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="synopsis">Synopsis</label>
            {errors.synopsis ? <p className="errors">{errors.synopsis}</p> : null}
          </div>
          <input
            id="synopsis"
            type="text"
            placeholder="Synopsis*"
            onChange={e => setSynopsis(e.target.value)}
            value={synopsis}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="key-art">Key Art</label>
            {errors.key_art ? <p className="errors">{errors.key_art}</p> : null}
          </div>
          <input
            id="key-art"
            type="text"
            placeholder="URL*"
            onChange={e => setKeyArt(e.target.value)}
            value={key_art}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="cover_photo">Cover Photo</label>
            {errors.cover_photo ? <p className="errors">{errors.cover_photo}</p> : null}
          </div>
          <input
            id="cover_photo"
            type="text"
            placeholder="URL"
            onChange={e => setCoverPhoto(e.target.value)}
            value={cover_photo}
          />
        </div>

        <div id="button-container">
          <button
            id="submit-button"
            type="submit"
            disabled={!title || (!genre1 && !genre2 && !genre3) || !year || !duration || !synopsis || !key_art}
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
