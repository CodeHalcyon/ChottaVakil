import React from "react";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Advantages</h1>
      <div className="advantage-container">
        <AdvantageCard
          head="Gamified Learning Modules"
          desc="Interactive learning for better understanding."
          src="https://cdn1.byjus.com/wp-content/uploads/2024/01/byjus_early_learn_characters_2024.webp"
        />
        <AdvantageCard
          head="Quizzes & Case-Based Scenarios"
          desc="Challenge yourself with legal case studies."
          src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png"
        />
        <AdvantageCard
          head="Role-Playing Games"
          desc="Experience courtroom simulations."
          src="https://cdn1.byjus.com/wp-content/uploads/2022/04/IAS.png"
        />
        <AdvantageCard
          head="AI-Powered Legal Assistant"
          desc="Get AI-driven legal insights in real-time."
          src="https://cdn1.byjus.com/wp-content/uploads/2022/04/IAS.png"
        />
      </div>
    </>
  );
};

export default Advantage;
