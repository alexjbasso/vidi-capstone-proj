import { useSelector } from "react-redux";
import FilmForm from "../FilmForm"

export default function FilmAdd() {
  const user = useSelector((state) => state.session?.user);

  if (!user) return (<h1>You need to be logged in to access this page.</h1>)

  return (
    <div id="film-add-container">
      <FilmForm type="Add" />
    </div>
  )
}
