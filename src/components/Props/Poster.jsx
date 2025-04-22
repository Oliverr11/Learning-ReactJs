import React from "react";
import "./poster.css";
const Poster = (props, children) => {
  return (
    <article>
      <img src="src/assets/p1.jpg" alt="" />
      <h2>{props.name}</h2>
      <p>Job : {props.job}</p>
      <p>Role : {props.role}</p>
      <p>Salary : {props.salary}$</p>
      {props.children}
    </article>
  );
};

export default Poster;
