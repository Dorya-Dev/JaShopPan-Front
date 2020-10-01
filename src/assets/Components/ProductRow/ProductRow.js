import React from "react";
import { Col, Row } from "react-bootstrap";
import "./productrow.css";

function ProductRow(props) {
  let renderProducts = () => {
    let productsJSX = [];

    props.products.forEach((product, index) => {
      productsJSX.push(
        <Col className="product-row-col">
          <p>{product.title}</p>
          <img src={product.image} />
        </Col>
      );
    });

    return productsJSX;
  };

  return <Row>{renderProducts()}</Row>;
}

export default ProductRow;
