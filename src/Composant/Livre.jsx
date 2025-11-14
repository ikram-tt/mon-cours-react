import React from "react";
import LivreImg from "./LivreImg";
import LivreTitle from "./LivreTitle";
import LivrePrice from "./LivrePrice";

function Livre({ image, title, author, year, price }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      width: "220px",
      textAlign: "center",
      borderRadius: "8px",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
    }}>
      <LivreImg image={image} />
      <LivreTitle title={title} author={author} year={year} />
      <LivrePrice price={price} />
      <button style={{ marginTop: "10px" }}>Read More...</button>
    </div>
  );
}

export default Livre;
