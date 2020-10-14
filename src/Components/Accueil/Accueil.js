import React, { useEffect, useState } from "react";
import "./accueil.css";
import { Col, Row, Carousel } from "react-bootstrap";
import ProductRow from "../../assets/Components/ProductRow/ProductRow";
import Sidebar from "../../assets/Components/Sidebar/Sidebar";
import { HashLink } from "react-router-hash-link";

function Accueil() {
  const [mangas, setMangas] = useState([]);
  const [videoGames, setVideoGames] = useState([]);
  const [goodies, setGoodies] = useState([]);

  useEffect(() => {
    getHomeProduct();
  }, []);

  function getHomeProduct() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:4000/home", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (products) => {
          setMangas(
            products.filter(function (product) {
              return product.category == "manga";
            })
          );

          setVideoGames(
            products.filter(function (product) {
              return product.category == "videoGames";
            })
          );

          setGoodies(
            products.filter(function (product) {
              return product.category == "goodies";
            })
          );
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
              <ProductRow products={mangas} />
              <br />
              <HashLink id="content-link" to="/content#link-jeuvideo">
                <h2>Figurines Jeux Vidéo</h2>
              </HashLink>
              <hr />
              <ProductRow products={videoGames} />
              <br />
              <HashLink id="content-link" to="/content#link-goodies">
                <h2>Goodies</h2>
              </HashLink>
              <hr />
              <ProductRow products={goodies} />
            </div>
          </Col>
          <Col sm={0} lg={3}></Col>
        </Row>
      </div>
    </section>
  );
}

export default Accueil;
