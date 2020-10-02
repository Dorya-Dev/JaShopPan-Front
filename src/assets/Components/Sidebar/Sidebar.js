import React from "react";
import "./sidebar.css";
import { AiFillFire } from "react-icons/ai";

function Sidebar(props) {
  let renderRandomProduct = (products) => {
    const randomIndex = Math.floor(Math.random() * products.length);
    let product = products[randomIndex];

    return (
      <div className="sidebar-product">
        <img src={product.imagexs} />
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
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
