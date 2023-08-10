import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPersonByIdThunk } from '../../store/people';

export default function PersonDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(state => state.people.singlePerson[id])

  useEffect(() => {
    async function fetchData() {
      const dispResp = await dispatch(getPersonByIdThunk(id));
    }
    fetchData()
  }, [dispatch, id]);


  return (
    <div id="person-details-container">
      <h1>Person Details</h1>
      <h2>{person?.name}</h2>
    </div>
  )

}
