import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/vaccine-register">Vaccine Register</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/vaccine-register">
            <VaccineRegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoginPage() {
  return <h2>Login Page</h2>;
}

function VaccineRegisterPage() {
  return <h2>Vaccine Register Page</h2>;
}

export default App;
