import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonByIdThunk } from '../../store/people';
import PersonForm from "../PersonForm"

export default function PersonEdit() {
  const dispatch = useDispatch();
  const { id } = useParams()
  const person = useSelector((state) => state.people.singlePerson[id] ? state.people.singlePerson[id] : null);
  const user = useSelector((state) => state.session.user ? state.session.user : null);

  useEffect(() => {
    dispatch(getPersonByIdThunk(id));
  }, [dispatch, id]);

  if (!person) return (<h1>This person does not exist</h1>);
  if (!user) return (<h1>You need to be logged in to access this page.</h1>)

  return (
    <div id="person-edit-container">
      <PersonForm type="Edit" person={person} />
    </div>
  )
}
