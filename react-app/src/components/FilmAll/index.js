import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllFilmsThunk } from '../../store/films';
import "./FilmAll.css"

export default function FilmAll() {
  const dispatch = useDispatch();
  const allFilms = Object.values(useSelector(state => state.films.allFilms))

  useEffect(() => {
    dispatch(getAllFilmsThunk());
  }, [dispatch]);

  console.log("allFilms:", (allFilms))

  return (
    <div id="film-all-container">
      <span id="all-films-header">FILMS</span>
      <span id="film-count">There are {allFilms.length} films.</span>
      <div id="all-films-grid">
        {allFilms.map(film =>
          <a key={film.id} href={`film/${film.id}`}>
            <img src={film.key_art} />
          </a>)}
      </div>
    </div>
  )
}
