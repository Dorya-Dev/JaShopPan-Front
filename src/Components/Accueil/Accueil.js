import React from "react";
import "./accueil.css";
import { Col, Row, Carousel, Container } from "react-bootstrap";
import { Mangas, JeuxVideo, Goodies } from "../productAcceuil.json";
import ProductRow from "../../assets/Components/ProductRow/ProductRow";

function Accueil() {
  return (
    <section className="test">
      <div className="essai">
        <Carousel className="content">
          <Carousel.Item>
            <img className="d-block w-100" src="allmangas.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="nero.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="smash-bros.jpg" />
          </Carousel.Item>
        </Carousel>
      </div>
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
              <ProductRow products={Goodies} />
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
