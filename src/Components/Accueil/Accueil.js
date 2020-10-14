import React, { useEffect } from "react";
import "./accueil.css";
import { Col, Row, Carousel } from "react-bootstrap";
import { Mangas, JeuxVideo, Goodies } from "../productAccueil.json";
import ProductRow from "../../assets/Components/ProductRow/ProductRow";
import Sidebar from "../../assets/Components/Sidebar/Sidebar";
import { manga, videoGames, goodies } from "../products.json";
import { HashLink } from "react-router-hash-link";

function Accueil() {
  useEffect(() => {
    getHomeProduct();
  }, []);

  function getHomeProduct() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "apllication/json",
      },
    };

    fetch("http://localhost:4000/home", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (products) => {
          console.log(products);
        },
        (error) => {
          console.log(error);
        }
      );
  }

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
              <HashLink id="content-link" to="/content#link-mangas">
                <h2>Figurines Mangas</h2>
              </HashLink>
              <hr />
              <ProductRow products={Mangas} />
              <br />
              <HashLink id="content-link" to="/content#link-jeuvideo">
                <h2>Figurines Jeux Vidéo</h2>
              </HashLink>
              <hr />
              <ProductRow products={JeuxVideo} />
              <br />
              <HashLink id="content-link" to="/content#link-goodies">
                <h2>Goodies</h2>
              </HashLink>
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
