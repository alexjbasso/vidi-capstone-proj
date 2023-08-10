import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getFilmByIdThunk } from '../../store/films';

export default function FilmDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const film = useSelector(state => state.films.singleFilm[id])

  useEffect(() => {
    async function fetchData() {
      const dispResp = await dispatch(getFilmByIdThunk(id));
    }
    fetchData()
  }, [dispatch, id]);

  return (
    <div id="film-details-container">
      <h1>Film Details</h1>
      <h2>{film?.title}</h2>
    </div>
  )
}
