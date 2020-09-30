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

function Header() {
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
            <Link className="nav-link" to="/account">
              Se connecter
            </Link>
            <Link className="nav-link" to="/">
              Panier <span> </span> <RiShoppingCart2Line />
            </Link>
          </Nav>
        </Navbar>
      </div>
      <Form inline>
        <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
        <Button variant="outline-info">Rechercher</Button>
      </Form>
    </header>
  );
}

export default Header;
