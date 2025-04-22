import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <article>
      <img src={props.image} alt="Shoes" />
      <h3>{props.name}</h3>
      <p>{props.text}</p>
      <span>{props.price}$</span>
    </article>
  );
};

export default Card;
