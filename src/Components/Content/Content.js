import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./content.css";

function Content() {
  return (
    <div className="body">
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
    </div>
  );
}

export default Content;
