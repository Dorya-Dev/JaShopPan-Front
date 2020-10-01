import React, { useState } from "react";
import "./account.css";
import { useHistory } from "react-router-dom";

function Account(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function SignIn() {
    if (password === "1234" && login === "test@test.fr") {
      setDisplay("Vous êtes connectés");
      console.log("log in success");
      history.push("/moncompte");
      localStorage.setItem("compte", "test@test.fr");
    } else {
      setPassword("");
      setDisplay("Mauvais mot de passe ou email");
      console.log("wrong password or email");
    }
  }
  return (
    <div className="account-body">
      <div className="border">
        <h1>Connexion</h1>
        <div>
          <div className="label">
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
          <div className="input">
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
          <button className="text" onClick={SignIn}>
            Se connecter
          </button>
          <div>
            <span className="return">{display}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
