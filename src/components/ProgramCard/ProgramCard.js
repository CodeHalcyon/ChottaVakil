import React from "react";

const ProgramCard = ({ name, description, objective, image, link }) => {
  return (
    <div className="program-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Objective:</strong> {objective}</p>
      <p>{description}</p>
      <a href={link} className="read-more" target="_blank" rel="noopener noreferrer">
        Read More →
      </a>
    </div>
  );
};

export default ProgramCard;
