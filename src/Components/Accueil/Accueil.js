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
import Sidebar from "../../assets/Components/Sidebar/Sidebar";
import { manga, videoGames, goodies } from "../products.json";
function Accueil() {
  return (
    <section className="test">
      <div className="essai">
        <Carousel className="content">
          <Carousel.Item>
            <img className="d-block w-100" src="bienvenue.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="Halloween.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="GTA V.jpg" />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div className="home-container">
        <Row>
          <Col sm={12} lg={9}>
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
          <Col sm={0} lg={3}>
            <Sidebar
              category1={manga}
              category2={videoGames}
              category3={goodies}
              category4={videoGames}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Accueil;
