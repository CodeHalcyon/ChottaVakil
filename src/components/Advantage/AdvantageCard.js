import React from "react";

const AdvantageCard = (props) => {
  return (
    <div className="advantage-card">
      <img src={props.src} alt="Advantage" />
      <h1>{props.head}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default AdvantageCard;
