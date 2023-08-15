import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import FilmAll from "./components/FilmAll";
import FilmDetails from "./components/FilmDetails"
import FilmAdd from "./components/FilmAdd"
import FilmEdit from "./components/FilmEdit"
import PersonAll from "./components/PersonAll";
import PersonDetails from "./components/PersonDetails"
import PersonAdd from "./components/PersonAdd"
import PersonEdit from "./components/PersonEdit"
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginFormPage} />
          <Route path="/signup" component={SignupFormPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/films" component={FilmAll} />
          <Route path="/film/new" component={FilmAdd} />
          <Route path="/film/:id/edit" component={FilmEdit} />
          <Route path="/film/:id" component={FilmDetails} />
          <Route path="/people" component={PersonAll} />
          <Route path="/person/new" component={PersonAdd} />
          <Route path="/person/:id/edit" component={PersonEdit} />
          <Route path="/person/:id" component={PersonDetails} />
          <Route component={NotFound} />
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
