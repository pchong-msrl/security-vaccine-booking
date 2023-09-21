import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login";
import VaccineRegisterPage from "./components/register";
import {AuthProvider} from "./components/context/authContext";
import NavBar from "./components/navBar";
import BookingRecord from "./components/bookingRecord";

function App() {

  return (
    <Router>
      <AuthProvider>
      <div >
        <NavBar></NavBar>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/vaccine-register">
            <VaccineRegisterPage />
          </Route>
            <Route path="/bookingRecord">
                <BookingRecord/>
            </Route>
        </Switch>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
