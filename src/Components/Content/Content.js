import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./content.css";
import ProductRow from "../../assets/Components/ProductRow/ProductRow";
import { manga, videoGames, goodies } from "../products.json";
import Sidebar from "../../assets/Components/Sidebar/Sidebar";

function Content() {
  return (
    <div className="account-container">
      <Row>
        <Col sm={8} lg={10}>
          <h2>Catégorie Mangas</h2>

          <ProductRow products={manga} />
          <h2>Catégorie Jeux Vidéo</h2>
          <ProductRow products={videoGames} />
          <h2>Catégorie Goodies</h2>
          <ProductRow products={goodies} />
        </Col>
        <Col sm={4} lg={2}>
          <div className="sidebar">
            <Sidebar
              category1={manga}
              category2={videoGames}
              category3={goodies}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
