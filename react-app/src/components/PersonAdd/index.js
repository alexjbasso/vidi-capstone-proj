import { useSelector } from "react-redux";
import PersonForm from "../PersonForm"

export default function PersonAdd() {
  const user = useSelector((state) => state.session.user ? state.session.user : null);

  if (!user) return (<h1>You need to be logged in to access this page.</h1>)

  return (
    <div id="person-add-container">
      <PersonForm type="Add" />
    </div>
  )

}
