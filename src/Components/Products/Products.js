import React from "react";
import "./products.css";

function Products() {
  return (
    <div className="products">
      <img
        className="one-piece-mug"
        src=".\img\Goodies\One-piece-mug.jpg"
        alt="opmug"
      />
      <div className="text-content">
        <h1 className="title">One Piece Mug - Chopper</h1>
        <h2 className="title2">Prix du produit : 12,00 €</h2>
        <p>
          Caractéristiques
          <br />
          <strong>Dimensions :</strong> 10 cm
          <br />
          Contenance : 460 ml
        </p>
        <p>Description du produit</p>
      </div>
    </div>
  );
}

export default Products;
