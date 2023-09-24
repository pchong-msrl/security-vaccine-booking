import React, { useState } from "react";
import { useAuth } from "./hook/useAuth";
import login from "../api/admin/login";
import contraner from "./contraner";
import Contraner from "./contraner";

function LoginPage() {
  const { token, setToken } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const jwt = await login({ username, password });
    // const jwt = "asdsad"
    if (jwt) {
      setToken(jwt);
    }
  };
  return (
    <Contraner>
      <div style={{ marginTop: "2rem" }}></div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={"Username"}
      />
      <div style={{ marginTop: "2rem" }}></div>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Password"}
      />
      <div style={{ marginTop: "2rem" }}></div>
      <button
        onClick={async () => {
          await handleLogin();
        }}
      >
        Login
      </button>
    </Contraner>
  );
}

export default LoginPage;
