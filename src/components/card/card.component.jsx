import { Component } from "react";
import "./card.style.css";

const Card = ({ id, name, email }) => {
  return (
    <li>
      <section className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </section>
    </li>
  );
};

export default Card;
