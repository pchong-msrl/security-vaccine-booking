import {Link} from "react-router-dom";
import React from "react";
import {useAuth} from "./hook/useAuth";

const NavBar = () =>{
  const {token,setToken} = useAuth()
   return <nav>
        <ul>

            <li>
                <Link to="/vaccine-register">Vaccine Register</Link>
            </li>
            {token? <button onClick={()=>{setToken(undefined)}}>Log out</button>:
                <li>
                <Link to="/login">Login</Link>
            </li> }
        </ul>
    </nav>
}
export default NavBar
