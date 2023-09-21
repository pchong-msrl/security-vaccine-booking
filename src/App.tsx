import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login";
import VaccineRegisterPage from "./components/register";
import {AuthProvider} from "./components/context/authContext";

function App() {

  return (
    <Router>
      <AuthProvider>
      <div>


        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/vaccine-register">
            <VaccineRegisterPage />
          </Route>
        </Switch>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
