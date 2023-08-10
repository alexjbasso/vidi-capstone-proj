import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllFilmsThunk } from '../../store/films';

export default function Home() {
  const dispatch = useDispatch();
  const allFilms = useSelector(state => state.films.allFilms)

  useEffect(() => {
    dispatch(getAllFilmsThunk());
  }, [dispatch]);

  console.log("allFilms:", Object.values(allFilms))

  return (
    <div id="home-container">
      <h2>Welcome back, User. Here's what we've been watching...</h2>
    </div>
  )

}
