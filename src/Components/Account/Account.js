import React, { useState } from "react";
import { RiPictureInPictureLine } from "react-icons/ri";
import "./account.css";

function Account(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("");

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function SignIn() {
    if (password === props.password && login === props.email) {
      setDisplay("Vous êtes connectés");
      console.log("log in success");
    } else {
      setPassword("");
      setDisplay("Mauvais mot de passe ou email");
      console.log("wrong password or email");
    }
  }
  return (
    <div className="body">
      <div class="border">
        <h1 data-shadow="dang!">Connexion</h1>
        <div className="contenair">
          <div class="label">
            <label>Email :</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Saisir votre email"
              onChange={handleLogin}
              value={login}
            ></input>
          </div>
        </div>
        <div className="container">
          <div class="input">
            <label>Mot de passe :</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Saisir votre password"
              onChange={handlePassword}
              value={password}
            ></input>
          </div>
        </div>
        <div className="button">
          <button className="text" onClick={SignIn} data-shadow="dang!">
            Log In
          </button>
          <div>
            <span class="return">{display}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
