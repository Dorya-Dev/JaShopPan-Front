import React from "react";
import "./products.css";
import { useLocation } from "react-router-dom";
import { manga, videoGames, goodies } from "../products.json";

function Products() {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const product = manga.find((value) => value.id === id);
  /*const product2 = videoGames.find((value) => value.id === id);
  const product3 = goodies.find((value) => value.id === id);*/

  return (
    <div className="products">
      <img className="one-piece-mug" src={product.image} alt="opmug" />
      <div className="text-content">
        <h1 className="title">{product.title}</h1>
        <h2 className="title2">Prix du produit : {product.price}</h2>
        <p>Caractéristiques</p>

        <p>
          <strong>Dimensions :</strong> 10 cm
        </p>

        <p> Contenance : 460 ml</p>
        <p>Description du produit</p>
      </div>
    </div>
  );
}

export default Products;
