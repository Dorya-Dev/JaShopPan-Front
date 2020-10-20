import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  const showCartProducts = cart.map((product, index) => (
    <div key={index}>
      {product.productId} {product.name} {product.price} {product.quantity}
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
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div>
      <div>{showCartProducts}</div>
    </div>
  );
}

export default Cart;
