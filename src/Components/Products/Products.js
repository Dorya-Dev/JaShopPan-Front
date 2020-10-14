import React, { useEffect, useState } from "react";
import "./products.css";
import { useLocation } from "react-router-dom";

import { Col, Row, Button } from "react-bootstrap";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

function Products() {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");

  const [oneProduct, setOneProduct] = useState({
    characteristics: [],
    price: 0,
  });

  useEffect(() => {
    getOneProduct();
  }, []);

  function getOneProduct() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:4000/product/detail?id=" + id, options)
      .then((response) => {
        return response.json();
      })
      .then((oneProduct) => {
        setOneProduct(oneProduct);
      });
  }

  return (
    <div className="products">
      <Row>
        <Col sm={12} lg={6}>
          <img
            className="product-pic"
            src={"http://localhost:4000/" + oneProduct.imagexs}
            alt="none"
          />
        </Col>
        <Col sm={12} lg={6}>
          <div className="text-content">
            <h1 className="title">{oneProduct.title}</h1>
            <h2 className="price">
              Prix du produit : {oneProduct.price.toFixed(2)} €
            </h2>
            <p className="characteristics">
              <h4 className="title4">Caractéristiques :</h4>

              <ul className="characteristics-list">
                {oneProduct.characteristics.map((value, index) => {
                  return <p key={index}>{value}</p>;
                })}
              </ul>
            </p>

            <div className="button-cart">
              <HashLink id="cart-link" to="/cart">
                <Button id="cart" variant="outline-warning">
                  <RiShoppingCart2Line className="logo-cart" /> Acheter
                </Button>
              </HashLink>
            </div>
            {/* <p className="description">Description du produit</p>*/}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Products;
