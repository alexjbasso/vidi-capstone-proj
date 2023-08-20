import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllFilmsThunk } from '../../store/films';
import "./FilmAll.css"

export default function FilmAll() {
  const dispatch = useDispatch();
  const allFilms = Object.values(useSelector(state => state.films.allFilms))
  const user = useSelector((state) => state.session.user ? state.session.user : null);

  allFilms.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });

  useEffect(() => {
    dispatch(getAllFilmsThunk());
  }, [dispatch]);

  return (
    <div id="film-all-container">
      <span id="all-films-header">FILMS{user && <a href="film/new"><i className="fa fa-plus add-film"></i></a>} </span>
      <span id="film-count">There are {allFilms.length} films.</span>
      <div id="all-films-grid">
        {allFilms.length && allFilms.map(film =>
          <div className={`all-film-tile-cont ${film.title === 'Barbie' ? 'barbie-cont' : 'norm-cont'}`}>
            <a key={film.id} href={`film/${film.id}`}>
              <img src={film.key_art} />
            </a>
            <span className={`tooltip ${film.title === 'Barbie' ? 'barbie-tool' : 'norm-tool'}`} key={film.title}>{film.title}</span>
          </div>
        )}
      </div>
    </div>
  )
}
