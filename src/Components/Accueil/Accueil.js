import React from "react";
import "./accueil.css";
import { Col, Row, Carousel, Container } from "react-bootstrap";

function Accueil() {
  return (
    <section className="test">
      <Carousel className="content">
        <Carousel.Item>
          <img
            className="Link"
            src="Link.jpg"
            alt="First slide"
            height="400"
            width="900"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="nintendo"
            src="nintendo.jpg"
            alt="Third slide"
            height="400"
            width="900"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <div className="middle">
        <Col className="Horizontal" sm={8}>
          <h2>Figurines Mangas</h2>
          <hr />
          <Row>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
            <Col>
              <img
                id="one-piece-portecles"
                src="Skateboard-xs.jpg"
                alt="opmug"
              />
              <br />
              <label> Porte-clés One Piece</label>
            </Col>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
          </Row>
        </Col>
        <br />
        <Col className="Horizontal2" sm={8}>
          <h2>Figurines Jeux Vidéos</h2>
          <hr />
          <Row>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
            <Col>
              <img
                id="one-piece-portecles"
                src="Skateboard-xs.jpg"
                alt="opmug"
              />
              <br />
              <label> Porte-clés One Piece</label>
            </Col>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
          </Row>
        </Col>
        <br />
        <Col className="Horizontal3" sm={8}>
          <h2>Goodies</h2>
          <hr />
          <Row>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
            <Col>
              <img
                id="one-piece-portecles"
                src="Skateboard-xs.jpg"
                alt="opmug"
              />
              <br />
              <label> Porte-clés One Piece</label>
            </Col>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
            <Col>
              <img id="one-piece-mug" src="Skateboard-xs.jpg" alt="opmug" />
              <br />
              <label> Mug One Piece</label>
            </Col>
          </Row>
        </Col>
        <Col className="vertical" sm={4}>
          Top tendances !
        </Col>
      </div>
    </section>
  );
}

export default Accueil;
