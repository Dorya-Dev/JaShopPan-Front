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
import { FaSearch } from "react-icons/fa";

function Header() {
  const [displayNav, setDisplayNav] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  function showMenuMobile() {
    if (displayNav) {
      return (
        <div className="menu-mobile-global">
          <Nav>
            <Link className="nav-link" to="/">
              Accueil
            </Link>
            <Nav.Link
              className="nav-link"
              onClick={() => {
                setDisplaySearch(!displaySearch);
              }}
            >
              Rechercher
            </Nav.Link>
            {connect()}
            <Link className="nav-link" to="/cart">
              Panier
            </Link>
          </Nav>
        </div>
      );
    }
  }

  function showDisplaySearch() {
    if (displaySearch) {
      return (
        <Form inline>
          <FormControl
            type="text"
            placeholder="Rechercher"
            className="mr-sm-2"
          />
          <Button id="btn" variant="outline-info">
            Rechercher
          </Button>
        </Form>
      );
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
      <GiHamburgerMenu
        className="menu-mobile"
        onClick={() => {
          setDisplayNav(!displayNav);
        }}
      />
      <div className="top">
        <img id="logo" src="./logo.png" alt="logo" />

        <Navbar id="Menu" variant="dark">
          <Nav>
            <Link className="nav-link" to="/">
              <IoIosHome />
              Accueil
            </Link>
            <Nav.Link
              className="nav-link"
              onClick={() => {
                setDisplaySearch(!displaySearch);
              }}
            >
              <FaSearch id="search-logo" />
              Rechercher
            </Nav.Link>
            {connect()}
            <Link className="nav-link" to="/cart">
              <RiShoppingCart2Line />
              Panier
            </Link>
          </Nav>
        </Navbar>
      </div>
      {showMenuMobile()}
      <div className="search-toogle">{showDisplaySearch()}</div>
    </header>
  );
}

export default Header;
