import React from "react";
import "./products.css";
import { useLocation } from "react-router-dom";
import { manga, videoGames, goodies } from "../products.json";
import { Col, Row, Button } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";

function Products() {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const products = [...manga, ...videoGames, ...goodies];
  const product = products.find((value) => value.id === id);

  return (
    <div className="products">
      <Row>
        <Col sm={12} lg={6}>
          <img className="product-pic" src={product.image} alt="none" />
        </Col>
        <Col sm={12} lg={6}>
          <div className="text-content">
            <h1 className="title">{product.title}</h1>
            <h2 className="price">Prix du produit : {product.price}</h2>
            <p className="characteristics">
              <h4>Caractéristiques :</h4>

              <ul className="characteristics-list">
                {product.characteristics.map((value, index) => {
                  return <p key={index}>{value}</p>;
                })}
              </ul>
            </p>

            <div className="button-cart">
              <Button id="cart" variant="outline-warning">
                <RiShoppingCart2Line className="logo-cart" /> Acheter
              </Button>
            </div>
            {/* <p className="description">Description du produit</p>*/}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Products;
