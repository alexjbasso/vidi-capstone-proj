import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllFilmsThunk } from '../../store/films';
import { getAllPeopleThunk } from "../../store/people";
import SplashPage from './SplashPage';
import HomePage from './HomePage';

export default function Home() {
  const dispatch = useDispatch();
  const films = Object.values(useSelector(state => state.films?.allFilms));
  const people = Object.values(useSelector(state => state.people?.allPeople));
  const user = useSelector((state) => state.session?.user);

  useEffect(() => {
    dispatch(getAllFilmsThunk());
    dispatch(getAllPeopleThunk());
  }, [dispatch]);

  if (!films.length || !people.length) return <h1>Loading...</h1>

  return (
    <div id="home-root-container">
      {/* {!user ? <SplashPage films={films} people={people} /> : */}
        <HomePage user={user} films={films} people={people} />
        {/* } */}
    </div>
  )
}
