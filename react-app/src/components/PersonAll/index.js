import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllPeopleThunk } from '../../store/people';
import "./PersonAll.css"

export default function PersonAll() {
  const dispatch = useDispatch();
  const people = Object.values(useSelector(state => state.people?.allPeople))
  const user = useSelector((state) => state.session.user ? state.session.user : null);
  console.log(people)

  people.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  useEffect(() => {
    dispatch(getAllPeopleThunk());
  }, [dispatch]);

  console.log(people)

  return (
    <div id="person-all-container">
      <span id="all-people-header">PEOPLE{user && <a href="person/new"><i className="fa fa-plus add-person"></i></a>} </span>
      <span id="person-count">There are {people.length} people.</span>
      <div id="all-people-grid">
        {people.map(person =>
          <div className="all-people-tile-cont">
            <a key={person.id} href={`person/${person.id}`}>
              <img src={person.featured_photo} />
            </a>
            <span className="tooltip" key={person.name}>{person.name}</span>
          </div>
        )}
      </div>
    </div>
  )
}
