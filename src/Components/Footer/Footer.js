import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div>
        <Link>
          <a to="/"> Conditions générales de vente </a>
        </Link>
        <Link>
          <a to="/"> Vos informations personnelles </a>
        </Link>
        <Link>
          <a to="/"> Cookies </a>
        </Link>
        <Link>
          <a to="/"> Annonces basées sur vos centres d’intérêt </a>
        </Link>
      </div>
      <p>&copy; 1996-2020, JaShopPan.com</p>
    </div>
  );
}

export default Footer;
