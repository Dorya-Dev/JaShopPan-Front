import React from "react";
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

function Header() {
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
      <div className="Top">
        <img id="logo" src="./logo.png" alt="logo" height="100" width="300" />
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
        {/* nav mobile*/}
        <nav className="header-nav-mob">
          <GiHamburgerMenu />
        </nav>
      </div>
      <Form inline>
        <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
        <Button variant="outline-info">Rechercher</Button>
      </Form>
    </header>
  );
}

export default Header;
