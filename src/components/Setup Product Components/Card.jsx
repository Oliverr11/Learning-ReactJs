import React from "react";
import "./card.css";
const Card = (props) => {
  const { image, brand, text, price } = props;
  return (
    <article>
      <img src={image} alt="Shoes" />
      <h3>{brand}</h3>
      <p>{text}</p>
      <span>{price}$</span>
    </article>
  );
};

export default Card;
