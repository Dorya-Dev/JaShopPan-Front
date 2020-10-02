import React, { useState } from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";

function Header() {
  const [displayNav, setDisplayNav] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  function Navmobil() {
    setDisplayNav(!displayNav);
    if (setDisplayNav.style.display === "block") {
      return <p>ttttttttttttt</p>;
    } else if (setDisplayNav.style.display === "block") {
      return <p>ooooooooooooooooooooooooooooooooooooooooooooo</p>;
    }
  }

  function Search() {
    setDisplaySearch(!displaySearch);
    if (setDisplaySearch === true) {
      return console.log("ok");
    } else if (setDisplaySearch === false) {
      return console.log("pasok");
    }
  }

  function connect() {
    let nom = localStorage.getItem("compte");
    if (nom) {
      return (
        <Link className="nav-link" to="/moncompte">
          Mon compte
        </Link>
      );
    } else {
      return (
        <Link className="nav-link" to="/account">
          Se connecter
        </Link>
      );
    }
  }
  return (
    <header className="header">
      <GiHamburgerMenu onClick={Navmobil} className="menu-navmob" />
      <div className="Top">
        <img id="logo" src="./logo.png" alt="logo" height="100" width="300" />
        <FcSearch className="header-search" onClick={Search} />
      </div>
      <div className="Top">
        <Navbar className="Menu" variant="dark">
          <Nav>
            <Link className="nav-link" to="/">
              <IoIosHome />
              <span> </span>
              Accueil
            </Link>
            {connect()}
            <Link className="nav-link" to="/cart">
              Panier <span> </span> <RiShoppingCart2Line />
            </Link>
          </Nav>
        </Navbar>
      </div>
      {displaySearch}
    </header>
  );
}

export default Header;
