import React from "react";
import "./moncompte.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Moncompte() {
  const history = useHistory();

  function Disconnect() {
    let nom = localStorage.getItem("compte");
    if (nom) {
      localStorage.removeItem("compte");
      history.push("/");
    }
  }
  return (
    <div className="moncompte-body">
      <button className="moncompe-button" onClick={Disconnect}>
        Déconnexion
      </button>
      <br />
      <Col sm={12} className="moncompte-array">
        <Row className="mon-compte-row">
          <Col className="mon-compte-col">
            <img
              className="simg"
              src=".\img\Moncompte\commande.png"
              alt="Vos commandes"
            />
            Vos Commandes
          </Col>
          <Col className="mon-compte-col">
            <img
              className="simg"
              src=".\img\Moncompte\securite.png"
              alt="Paramètres de sécurité"
            />
            Paramètres de sécurité
          </Col>
          <Col className="mon-compte-col">
            <img
              className="simg"
              src=".\img\Moncompte\adresse.png"
              alt="Adresse"
            />
            Vos Adresses
          </Col>
        </Row>

        <Row className="mon-compte-row">
          <Col className="mon-compte-col">
            <img
              className="simg"
              src=".\img\Moncompte\paiement.jpg"
              alt="Vos paiements"
            />
            Vos Paiements
          </Col>
          <Col className="mon-compte-col">
            <img
              className="simg"
              src=".\img\Moncompte\message.png"
              alt="Messagerie"
            />
            Votre Messagerie
          </Col>
          <Col className="mon-compte-col">
            <img
              className="simg"
              src=".\img\Moncompte\contact.png"
              alt="Nous Contacter"
            />
            Nous Contacter
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default Moncompte;
