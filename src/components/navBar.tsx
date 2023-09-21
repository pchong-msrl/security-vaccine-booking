import {Link} from "react-router-dom";
import React from "react";
import {useAuth} from "./hook/useAuth";

const NavBar = () =>{
  const {token,setToken} = useAuth()
   return <nav style={{background:"white",borderStyle:"double",padding:"1rem 4rem"}}>

        <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>

            <div>
                <Link to="/vaccine-register">Vaccine Register</Link>
            </div>
            <div>
            {token? <button onClick={()=>{setToken(undefined)}}>Log out</button>:

                <Link to="/login">Login</Link>
             }
            </div>
        </div>
    </nav>
}
export default NavBar
