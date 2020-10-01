import React from "react";
import "./accueil.css";
import { Col, Row, Carousel, Container } from "react-bootstrap";
import { Mangas, JeuxVideo } from "../productAcceuil.json";
import ProductRow from "../../assets/Components/ProductRow/ProductRow";

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
      <div className="home-container">
        <Row>
          <Col xl={10} lg={8}>
            <div className="middle">
              <h2>Figurines Mangas</h2>
              <hr />
              <ProductRow products={Mangas} />
              <br />
              <h2>Figurines Jeux Vidéo</h2>
              <hr />
              <ProductRow products={JeuxVideo} />
              <br />
              <h2>Goodies</h2>
              <hr />
            </div>
          </Col>
          <Col xl={2} lg={4}>
            <div className="Toptendance">
              <Col>
                <img src="Skateboard-xs.jpg" />
              </Col>
              <Col>
                <img src="Skateboard-xs.jpg" />
              </Col>
              <Col>
                <img src="Skateboard-xs.jpg" />
              </Col>
              <Col>
                <img src="Skateboard-xs.jpg" />
              </Col>
            </div>
          </Col>
        </Row>
      </div>
      <br />
    </section>
  );
}

export default Accueil;
