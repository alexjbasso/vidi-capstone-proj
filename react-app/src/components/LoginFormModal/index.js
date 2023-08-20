import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import SignupFormModal from "../SignupFormModal";
import "./LoginFormModal.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal, setModalContent } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };

  const demoUserLogin = async (e) => {
    e.preventDefault();
    const demoUserCredentials = {
      email: "r.ebert@email.com",
      password: "password"
    };
    await dispatch(login(demoUserCredentials.email, demoUserCredentials.password))
      .then(() => {
        closeModal();
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const openSignupModal = (e) => {
    e.preventDefault();
    setModalContent(<SignupFormModal />);
  };

  return (
    <div id="login-modal-container">
      <div className="modal-close-x">
        <i className="fa fa-x modal-close-x-button" onClick={closeModal} />
      </div>
      <h1 id="login-text">Log In</h1>
      <button className="demoUserLink" onClick={demoUserLogin}>Continue with Demo User</button>
      <form onSubmit={handleSubmit} id="login-form">
        <ul id="errors-ul">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button id="login-submit" type="submit">Log In</button>
      </form>
      <p id="sign-up-link">
        Don't have an account?{" "}
        <a href="" onClick={openSignupModal}>Sign up for Vidi</a>
      </p>
    </div>
  );
}

export default LoginFormModal;
