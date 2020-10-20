import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  const showCartProducts = cart.map((product, index) => (
    <div key={index}>
      <Row className="showCart">
        <Col>
          <img
            className="product-pic"
            src={"http://localhost:4000/" + product.imagexs}
            alt="none"
          />
        </Col>
        <Col>{product.name}</Col>
        <Col>{product.price}</Col>
        <Col>{product.quantity}</Col>
      </Row>
    </div>
  ));

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };

    fetch("http://localhost:4000/account/cart", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          setCart(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return <div>{showCartProducts}</div>;
}

export default Cart;
