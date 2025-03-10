import React from "react";
import ProgramCard from "./ProgramCard";

const programsData = [
  {
    name: "Little Defenders (Ages 6–10)",
    description: "Introduce basic legal concepts and fundamental rights in a fun and engaging way.",
    objective: "Know Your World, Know Your Rights!",
    image: "https://cdn.pixabay.com/photo/2016/03/27/19/20/hands-1280424_960_720.jpg",
    link: "/programs/little-defenders"
  },
  {
    name: "Young Advocates (Ages 11–15)",
    description: "Empower teenagers with real-world legal knowledge to navigate personal, digital, and school life.",
    objective: "Smart Kids, Stronger Rights!",
    image: "https://cdn.pixabay.com/photo/2018/03/12/17/55/learning-3221044_960_720.jpg",
    link: "/programs/young-advocates"
  },
  {
    name: "Legal Pioneers (Ages 16–18)",
    description: "Prepare young adults for legal responsibilities, workplace rights, and fundamental legal literacy.",
    objective: "Your Rights, Your Power!",
    image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/man-606765_960_720.jpg",
    link: "/programs/legal-pioneers"
  },
  {
    name: "Future Lawmakers (Ages 19–21)",
    description: "Equip young adults with legal expertise, leadership skills, and career guidance in law and governance.",
    objective: "From Classrooms to Courtrooms!",
    image: "https://cdn.pixabay.com/photo/2018/05/29/10/46/europe-3433856_960_720.jpg",
    link: "/programs/future-lawmakers"
  }
];

const Programs = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Chota Vakil Learning Programs (Ages 6–21)</h1>
      <div className="programs-container">
        {programsData.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
};

export default Programs;
