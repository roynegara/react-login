import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        console.log(res);
        setNotif("login berhasil");
        const token = res?.data?.data?.token;
        if (token) {
          //   navigate("/menu");

          setTimeout(() => {
            navigate("/menu");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div>
        <Navbar />
      </div>

      <div className="login-form">
        <h1>Login</h1>
        {!!notif.length && <h1>{notif}</h1>}
        <div>
          <label>Username:</label>
          <input
            value={username}
            type="text"
            id="username"
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
              <button onClick={handleLogin}>Login</button>
              <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Login;
