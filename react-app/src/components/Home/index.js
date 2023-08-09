import { useDispatch, useSelector } from "react-redux"

export default function Home() {
  const dispatch = useDispatch();
  const allFilms = useSelector(state => state.films.allFilms)


  return (
    <div id="home-container">
      <h2>Welcome back, User. Here's what we've been watching...</h2>
    </div>
  )

}
