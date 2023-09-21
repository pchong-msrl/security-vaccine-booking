import {Link} from "react-router-dom";
import React from "react";
import {useAuth} from "./hook/useAuth";

const NavBar = () =>{
  const {token,setToken} = useAuth()
   return <nav style={{background:"white",borderStyle:"double",padding:"1rem 4rem"}}>

        <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>

            <div style={{display:"flex",flexDirection:"row"}}>
                <Link to="/vaccine-register">Vaccine Register</Link>
                <div style={{width:"1rem"}}></div>
                {token&&    <Link to="/bookingRecord">list Booking Record</Link>}
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
