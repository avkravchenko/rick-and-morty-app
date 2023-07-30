import React from "react";
import "./card.scss";

const Card = React.memo(({ data }) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img className="card__img" src={data.image} alt="" />
      </div>
      <div className="card__description">
        <h3>{data.name}</h3>
        <p>Status: {data.status}</p>
        <p>Gender: {data.gender}</p>
      </div>
    </div>
  );
});

export default Card;
