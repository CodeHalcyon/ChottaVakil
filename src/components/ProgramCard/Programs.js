import React, { useEffect, useRef } from "react";
const ProgramCard = ({ name, description, objective, image, link, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("fade-in-up");
          cardRef.current.style.animationDelay = `${index * 0.15}s`;
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div ref={cardRef} className="program-card">
      <div className="program-card-image">
        <img src={image} alt={name} />
        <div className="program-card-age">
          {name.split("(")[1]?.replace(")", "") || ""}
        </div>
      </div>
      <div className="program-card-content">
        <h2 className="program-card-title">{name.split("(")[0].trim()}</h2>
        <div className="program-card-objective">
          <span>Objective:</span> {objective}
        </div>
        <p className="program-card-description">{description}</p>
        <a
          href={link}
          className="program-card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Program <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

const Programs = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headerRef.current.classList.add("fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const programsData = [
    {
      name: "Little Defenders (Ages 6–10)",
      description:
        "Introduce basic legal concepts and fundamental rights in a fun and engaging way.",
      objective: "Know Your World, Know Your Rights!",
      image:
        "https://etvqaruci3mfadph.public.blob.vercel-storage.com/little-CLerlYP4a8X9Hn0M4WOYs3Agu13Iuq.jpg",
      link: "/programs/little-defenders",
    },
    {
      name: "Young Advocates (Ages 11–15)",
      description:
        "Empower teenagers with real-world legal knowledge to navigate personal, digital, and school life.",
      objective: "Smart Kids, Stronger Rights!",
      image:
        "https://etvqaruci3mfadph.public.blob.vercel-storage.com/young-LM0s1zEwpxTOTmLW2aXVjGH3XxBuiO.jpg",
      link: "/programs/young-advocates",
    },
    {
      name: "Legal Pioneers (Ages 16–18)",
      description:
        "Prepare young adults for legal responsibilities, workplace rights, and fundamental legal literacy.",
      objective: "Your Rights, Your Power!",
      image:
        "https://etvqaruci3mfadph.public.blob.vercel-storage.com/legal-E7O4vTblQh3NE7QROK7t85M7UK8roO.jpg",
      link: "/programs/legal-pioneers",
    },
    {
      name: "Future Lawmakers (Ages 19–21)",
      description:
        "Equip young adults with legal expertise, leadership skills, and career guidance in law and governance.",
      objective: "From Classrooms to Courtrooms!",
      image:
        "https://etvqaruci3mfadph.public.blob.vercel-storage.com/future-5ly90b6nbA9iDiJXUT77F1j5oRjd4R.jpg",
      link: "/programs/future-lawmakers",
    },
  ];

  return (
    <section className="programs-section">
      <div className="programs-container">
        <div ref={headerRef} className="programs-header">
          <h1 className="programs-title">
            <span className="green">Chotta Vakil</span> Learning Programs
          </h1>
          <div className="programs-divider"></div>
          <p className="programs-subtitle">
            Age-appropriate legal education designed to empower the next
            generation with essential legal knowledge and skills.
          </p>
        </div>

        <div className="programs-grid">
          {programsData.map((program, index) => (
            <ProgramCard key={index} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
