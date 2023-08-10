import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllFilmsThunk } from '../../store/films';

export default function FilmAll() {
  const dispatch = useDispatch();
  const allFilms = useSelector(state => state.films.allFilms)

  useEffect(() => {
    dispatch(getAllFilmsThunk());
  }, [dispatch]);

  console.log("allFilms:", Object.values(allFilms))

  return (
    <div id="film-all-container">
      <h1>All Films</h1>
    </div>
  )
}
