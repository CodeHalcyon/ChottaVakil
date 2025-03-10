import React from "react";
import ProgramCard from "./ProgramCard";

const programsData = [
  {
    name: "Little Defenders (Ages 6–10)",
    description: "Introduce basic legal concepts and fundamental rights in a fun and engaging way.",
    objective: "Know Your World, Know Your Rights!",
    image: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/little-CLerlYP4a8X9Hn0M4WOYs3Agu13Iuq.jpg",
    link: "/programs/little-defenders"
  },
  {
    name: "Young Advocates (Ages 11–15)",
    description: "Empower teenagers with real-world legal knowledge to navigate personal, digital, and school life.",
    objective: "Smart Kids, Stronger Rights!",
    image: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/young-8plvwpbdCpy2y8yPYb78xSGU3Wg8Z4.jpg",
    link: "/programs/young-advocates"
  },
  {
    name: "Legal Pioneers (Ages 16–18)",
    description: "Prepare young adults for legal responsibilities, workplace rights, and fundamental legal literacy.",
    objective: "Your Rights, Your Power!",
    image: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/legal-nplAMhxmOKwNawyAxkxM5FkeF5Vsb5.jpg",
    link: "/programs/legal-pioneers"
  },
  {
    name: "Future Lawmakers (Ages 19–21)",
    description: "Equip young adults with legal expertise, leadership skills, and career guidance in law and governance.",
    objective: "From Classrooms to Courtrooms!",
    image: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/future-5ly90b6nbA9iDiJXUT77F1j5oRjd4R.jpg",
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
