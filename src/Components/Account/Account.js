import React, { useState } from "react";
import "./account.css";
import { useHistory } from "react-router-dom";

function Account(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("");
  const history = useHistory();
  const [newLogin, setNewLogin] = useState([]);
  const [newPassword, setNewPassword] = useState([]);

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const newHandleLogin = (e) => {
    setNewLogin(e.target.value);
  };
  const newHandlePassword = (e) => {
    setNewPassword(e.target.value);
  };

  function Register() {
    localStorage.setItem("newlog", newLogin);
    localStorage.setItem("newpass", newPassword);
  }

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
          <button onClick={SignIn}>Se connecter</button>
          <div>
            <span className="return">{display}</span>
          </div>
        </div>
        <div className="account-separator">
          <h1>Créer</h1>
          <p>Votre nouveau compte gratuit</p>
          <div>
            <div className="label">
              <label>Nouvel email :</label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Saisir votre email"
                onChange={newHandleLogin}
                value={newLogin}
              ></input>
            </div>
          </div>
          <div className="container">
            <div className="input">
              <label>Nouveau mot de passe :</label>
              <br />
              <input
                type="password"
                id="password"
                placeholder="Saisir votre password"
                onChange={newHandlePassword}
                value={newPassword}
              ></input>
            </div>
          </div>
          <div className="button">
            <button onClick={Register}>S'inscrire</button>
            <div>
              <span className="return">{display}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
