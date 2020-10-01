import React, { useState } from "react";
import "./moncompte.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Moncompte() {
  const history = useHistory();
  const [tabOrder, setTabOrder] = useState("");

  const handleSelect = (value) => {
    setTabOrder(value);
  };

  function Tabselect() {
    switch (tabOrder) {
      case "order":
        return (
          <div>
            <h2 className="title-moncompte">Vos commandes</h2>
          </div>
        );
        break;
      case "setting":
        return (
          <div>
            <h2 className="title-moncompte">Paramètres de sécurité</h2>
          </div>
        );
        break;
      case "address":
        return (
          <div>
            <h2 className="title-moncompte">Vos Adresses</h2>
          </div>
        );
        break;
      case "payment":
        return (
          <div>
            <h2 className="title-moncompte">Vos Paiements</h2>
          </div>
        );
        break;
      case "message":
        return (
          <div>
            <h2 className="title-moncompte">Votre Messagerie</h2>
          </div>
        );
        break;
      case "contact":
        return (
          <div>
            <h2 className="title-moncompte">Nous Contacter</h2>
          </div>
        );
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
  }

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
          <Col
            className="mon-compte-col"
            onClick={() => {
              handleSelect("order");
            }}
          >
            <img
              id="order"
              className="simg"
              src=".\img\Moncompte\commande.png"
              alt="Vos commandes"
            />
            <label htmlFor="order">Vos Commandes</label>
          </Col>
          <Col
            className="mon-compte-col"
            onClick={() => {
              handleSelect("setting");
            }}
          >
            <img
              id="setting"
              className="simg"
              src=".\img\Moncompte\securite.png"
              alt="Paramètres de sécurité"
            />
            <label htmlFor="setting">Paramètres de sécurité</label>
          </Col>
          <Col
            className="mon-compte-col"
            onClick={() => {
              handleSelect("address");
            }}
          >
            <img
              id="address"
              className="simg"
              src=".\img\Moncompte\adresse.png"
              alt="Adresse"
            />
            <label htmlFor="address">Vos Adresses</label>
          </Col>
        </Row>
        <Row className="mon-compte-row">
          <Col
            className="mon-compte-col"
            onClick={() => {
              handleSelect("payment");
            }}
          >
            <img
              id="payment"
              className="simg"
              src=".\img\Moncompte\paiement.jpg"
              alt="Vos paiements"
            />
            <label htmlFor="payment">Vos Paiements</label>
          </Col>
          <Col
            className="mon-compte-col"
            onClick={() => {
              handleSelect("message");
            }}
          >
            <img
              id="message"
              className="simg"
              src=".\img\Moncompte\message.png"
              alt="Messagerie"
            />
            <label htmlFor="message">Votre Messagerie</label>
          </Col>
          <Col
            className="mon-compte-col"
            onClick={() => {
              handleSelect("contact");
            }}
          >
            <img
              id="contact"
              className="simg"
              src=".\img\Moncompte\contact.png"
              alt="Nous Contacter"
            />
            <label htmlFor="contact">Nous Contacter</label>
          </Col>
        </Row>
      </Col>
      <div>{Tabselect()}</div>
    </div>
  );
}

export default Moncompte;
