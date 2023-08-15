import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmByIdThunk } from '../../store/films';
import FilmForm from "../FilmForm"

export default function FilmEdit() {
  const dispatch = useDispatch();
  const { id } = useParams()
  const film = useSelector((state) => state.films.singleFilm[id] ? state.films.singleFilm[id] : null);
  const user = useSelector((state) => state.session.user ? state.session.user : null);

  useEffect(() => {
    dispatch(getFilmByIdThunk(id));
  }, [dispatch, id]);
  
  if (!user) return (<h1>You need to be logged in to access this page.</h1>)
  if (!film) return (<h1>This film does not exist</h1>);

  return (
    <div id="film-edit-container">
      <FilmForm type="Edit" film={film} />
    </div>
  )
}
