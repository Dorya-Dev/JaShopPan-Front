import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./productrow.css";
import { Card, Button } from "react-bootstrap";

function ProductRow(props) {
  let renderProducts = () => {
    let productsJSX = [];

    props.products.forEach((product, index) => {
      productsJSX.push(
        <Col className="product-row-col">
          <Card className="product-card">
            <Card.Img variant="top" src={product.imagexs} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Link to={"/product?id=" + product.id}>
                <Button variant="primary">Voir Produit</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return productsJSX;
  };

  return <Row>{renderProducts()}</Row>;
}

export default ProductRow;
