import {Link} from "react-router-dom";
import React from "react";
import {useAuth} from "./hook/useAuth";

const NavBar = () =>{
  const {token} = useAuth()
   return <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/vaccine-register">Vaccine Register</Link>
            </li>
            {token? <div>Admin Here</div>:<div>UnAuth</div> }
        </ul>
    </nav>
}
export default NavBar
