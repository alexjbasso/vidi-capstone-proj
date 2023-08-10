import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFilmThunk } from "../../store/films";

export default function FilmForm({ film, type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(film?.title);
  const [genre, setGenre] = useState(film?.genre);
  const [year, setYear] = useState(film?.year);
  const [duration, setDuration] = useState(film?.duration);
  const [synopsis, setSynopsis] = useState(film?.synopsis);
  const [key_art, setKeyArt] = useState(film?.key_art);
  const [cover_photo, setCoverPhoto] = useState(film?.cover_photo);
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})
    const formData = { title, genre, year, duration, synopsis, key_art, cover_photo }

    if (type === "Add") {
      film = await dispatch(addFilmThunk(formData))
      console.log(film)

    } else if (type === "Edit") {
      // album = await dispatch(updateAlbumThunk(album, formData))
    }

    if (film.errors) {
      setErrors(film.errors)
    } else {
      history.push(`/film/${film.payload.id}`);
    }
  }

  const handleCancelClick = (e) => {
    if (type === 'Update Album') {
      history.push(`/profile`);
    }
    else {
      history.goBack();
    }
  }

  return (
    <div id="film-form-container">
      <form id="film-form" onSubmit={handleSubmit}>
        <h1>Film {type}</h1>
        <div className="film-field">
          <div className="field-label">
            <label htmlFor="title">Title</label>
          </div>
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="genre">Genre</label>
          </div>
          <input
            id="genre"
            type="text"
            placeholder="Genre"
            onChange={e => setGenre(e.target.value)}
            value={genre}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="year">Year</label>
          </div>
          <input
            id="year"
            type="number"
            placeholder="Year"
            onChange={e => setYear(e.target.value)}
            value={year}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="duration">Duration</label>
          </div>
          <input
            id="duration"
            type="number"
            placeholder="Duration"
            onChange={e => setDuration(e.target.value)}
            value={duration}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="synopsis">Synopsis</label>
          </div>
          <input
            id="synopsis"
            type="text"
            placeholder="Synopsis"
            onChange={e => setSynopsis(e.target.value)}
            value={synopsis}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="key-art">Key art</label>
          </div>
          <input
            id="key-art"
            type="text"
            placeholder="Key art"
            onChange={e => setKeyArt(e.target.value)}
            value={key_art}
          />
        </div>

        <div className="film-field">
          <div className="field-label">
            <label htmlFor="cover_photo">Cover photo</label>
          </div>
          <input
            id="cover_photo"
            type="text"
            placeholder="Cover photo"
            onChange={e => setCoverPhoto(e.target.value)}
            value={cover_photo}
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
