import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllPeopleThunk } from '../../store/people';

export default function PersonAll() {
  const dispatch = useDispatch();
  const allPeople = useSelector(state => state.people.allPeople)

  useEffect(() => {
    dispatch(getAllPeopleThunk());
  }, [dispatch]);

  console.log("allPeople:", Object.values(allPeople))

  return (
    <div id="person-all-container">
      <h1>All People</h1>
    </div>
  )
}
