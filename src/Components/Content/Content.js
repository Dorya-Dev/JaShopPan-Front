import React from "react";
import { Col, Row } from "react-bootstrap";
import "./content.css";
import ProductRow from "../../assets/Components/ProductRow/ProductRow";
import { manga, videoGames, goodies } from "../products.json";
import Sidebar from "../../assets/Components/Sidebar/Sidebar";

function Content() {
  return (
    <div className="content-container">
      <Row>
        <Col className="content-col" sm={12} lg={9}>
          <h2 id="link-mangas">Catégorie Mangas</h2>
          <ProductRow products={manga} />
          <h2 id="link-jeuvideo">Catégorie Jeux Vidéo</h2>
          <ProductRow products={videoGames} />
          <h2 id="link-goodies">Catégorie Goodies</h2>
          <ProductRow products={goodies} />
        </Col>
        <Col sm={0} lg={3}>
          <div className="sidebar">
            <Sidebar
              category1={manga}
              category2={videoGames}
              category3={goodies}
              category4={videoGames}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
