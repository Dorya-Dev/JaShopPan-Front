import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./content.css";
import ProductRow from "./ProductRow";

function Content() {
  const products1 = [
    {
      title: "Figurine Luffy",
      image: "./img/figurine/onepiece/One-piece-Luffy-xs.jpg",
    },
    {
      title: "Figurine Luffy 20th Anniversary",
      image: "./img/figurine/onepiece/One-piece-Luffy-anniv-xs.jpg",
    },
    {
      title: "Figurine Chopper",
      image: "./img/figurine/onepiece/One-piece-Chopper-xs.jpg",
    },
    {
      title: "Figurine Usopp",
      image: "./img/figurine/onepiece/One-piece-Usopp-xs.jpg",
    },
    {
      title: "Barre Latérale",
    },
  ];

  const products2 = [
    {
      title: "Figurine Nico Robin",
      image: "./img/figurine/onepiece/One-piece-Robin-xs.jpg",
    },
    {
      title: "Figurine Nami",
      image: "./img/figurine/onepiece/One-piece-Nami-xs.jpg",
    },
    {
      title: "Figurine Shank et Luffy",
      image: "./img/figurine/onepiece/One-piece-Luffy-kid-xs.jpg",
    },
    {
      title: "Figurine Sanji",
      image: "./img/figurine/onepiece/One-piece-Sanji-xs.jpg",
    },
    {
      title: "Barre Latérale",
    },
  ];

  return (
    <div className="account-container">
      <ProductRow products={products1} />
      <ProductRow products={products2} />
    </div>

    /*<div className="content-body">
      <div className="goodies">
        <Row>
          <Col sm={8}>
            Produits
            <Row>
              <Col>
                <Link to="./Products">
                  <img
                    id="one-piece-mug"
                    src="\img\Goodies\One-piece-mug-xs.jpg"
                    alt="opmug"
                  />
                  Mug One Piece
                </Link>
              </Col>
              <Col>
                <img
                  id="one-piece-portecles"
                  src=".\img\Goodies\One-piece-porte-cles-xs.jpg"
                  alt="opmug"
                />
                <br />
                <label> Porte-clés One Piece</label>
              </Col>
              <Col>
                <Link to="./Products">
                  <img
                    id="one-piece-keyringluffy"
                    src=".\img\Goodies\One-piece-porte-cles-Luffy-xs.jpg"
                    alt="opmug"
                  />
                  <br />
                  <label> Porte clés Luffy One Piece</label>
                </Link>
              </Col>

              <Col>
                <img
                  id="one-piece-tapis"
                  src=".\img\Goodies\One-piece-tapis-souris-xs.jpg"
                  alt="opmug"
                />
                <br />
                <label> Tapis de souris One Piece</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="./Products">
                  <img
                    id="one-piece-mug"
                    src=".\img\Goodies\One-piece-mug-xs"
                    alt="opmug"
                  />
                  Mug One Piece
                </Link>
              </Col>
              <Col>
                <img
                  id="one-piece-portecles"
                  src=".\img\figurine\one-piece\One-piece-porte-cles-xs.jpg"
                  alt="opmug"
                />
                <br />
                <label> Porte-clés One Piece</label>
              </Col>
              <Col>
                <Link to="./Products">
                  <img
                    id="one-piece-mug"
                    src=".\img\figurine\one-piece\One-piece-porte-cles-Luffy-xs.jpg"
                    alt="opmug"
                  />
                  <br />
                  <label> Mug One Piece</label>
                </Link>
              </Col>

              <Col>
                <img
                  id="one-piece-mug"
                  src=".\img\figurine\one-piece\One-piece-tapis-souris-xs.jpg"
                  alt="opmug"
                />
                <br />
                <label> Mug One Piece</label>
              </Col>
            </Row>
          </Col>
          <Col className="barre" sm={4}>
            Barre Verticale <br />
            <img
              id="barre"
              src=".\img\figurine\one-piece\barre.jpg"
              alt="barre"
            />
          </Col>
        </Row>
      </div>
    </div>*/
  );
}

export default Content;
