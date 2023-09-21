import React, {useState} from "react";
import {useAuth} from "./hook/useAuth";
import login from "../api/admin/login";

function LoginPage() {
  const {token,setToken}= useAuth()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const handleLogin = async ()=>{
    const jwt = await login({username,password})
    if(jwt){
      setToken("asdsad")
    }
  }
  return <>
    <div>
      <h2>{token}</h2>;
      <input/>
      <input/>
      <button onClick={async ()=>{
        await handleLogin()
      }}></button>
    </div>
  </>


}

export default LoginPage;
