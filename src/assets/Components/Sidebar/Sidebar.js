import React from "react";
import "./sidebar.css";
import { AiFillFire } from "react-icons/ai";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar(props) {
  let renderRandomProduct = (products) => {
    const randomIndex = Math.floor(Math.random() * products.length);
    let product = products[randomIndex];

    return (
      <Card className="product-card">
        <Card.Img variant="top" src={product.imagexs} />
        <Card.Body>
          <Card.Title>
            {product.title.length > 20
              ? product.title.substring(0, 17) + "..."
              : product.title}
          </Card.Title>
          <Link to={"/product?id=" + product._id}>
            <Button variant="primary">Voir Produit</Button>
          </Link>
        </Card.Body>
      </Card>
      /*<div className="sidebar-product">
        <img src={product.imagexs} />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>*/
    );
  };

  return (
    <div className="Toptendance">
      <h3>
        <AiFillFire />
        Top Tendance
        <AiFillFire />
      </h3>

      <hr />
      {renderRandomProduct(props.category1)}
      {renderRandomProduct(props.category2)}
      {renderRandomProduct(props.category3)}
      {renderRandomProduct(props.category4)}
    </div>
  );
}

export default Sidebar;
