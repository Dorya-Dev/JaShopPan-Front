import React from "react";
import { Col, Row } from "react-bootstrap";
import "./productrow.css";

function ProductRow(props) {
  let renderProducts = () => {
    let productsJSX = [];

    props.products.forEach((product, index) => {
      productsJSX.push(
        <Col className="product-row-col">
          <img src={product.image} />
          <p>{product.title}</p>
          <p>{product.price}</p>
        </Col>
      );
    });

    return productsJSX;
  };

  return <Row>{renderProducts()}</Row>;
}

export default ProductRow;
