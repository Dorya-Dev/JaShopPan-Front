import React from "react";
import "./accueil.css";
import { Col, Row, Carousel, Container } from "react-bootstrap";
import {
  Mangas,
  JeuxVideo,
  Goodies,
  Toptendance,
} from "../productAcceuil.json";
import ProductRow from "../../assets/Components/ProductRow/ProductRow";
import { AiFillFire } from "react-icons/ai";

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
          <Col xl={9} lg={11}>
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
          <Col xl={3} lg={1}>
            <div className="Toptendance">
              <h2>
                <AiFillFire />
                Top Tendance
                <AiFillFire />
              </h2>

              <hr />

              <ProductRow products={Toptendance} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Accueil;
