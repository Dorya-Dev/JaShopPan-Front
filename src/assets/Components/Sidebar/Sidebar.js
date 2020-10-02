import React from "react";
import "./sidebar.css";

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
    <div>
      {renderRandomProduct(props.category1)}
      {renderRandomProduct(props.category2)}
      {renderRandomProduct(props.category3)}
      {renderRandomProduct(props.category4)}
    </div>
  );
}

export default Sidebar;
