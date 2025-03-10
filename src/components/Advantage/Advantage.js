import React, { useEffect, useRef } from "react";
const AdvantageCard = ({ head, desc, src, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("slide-up");
          cardRef.current.style.animationDelay = `${index * 0.1}s`;
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
    <div ref={cardRef} className="advantage-card">
      <div className="advantage-card-image">
        <img src={src} alt={head} />
      </div>
      <div className="advantage-card-content">
        <h3 className="advantage-card-title">{head}</h3>
        <p className="advantage-card-description">{desc}</p>
      </div>
    </div>
  );
};

const Advantage = () => {
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

  const advantages = [
    {
      head: "Gamified Learning Modules",
      desc: "Interactive learning for better understanding and retention of complex legal concepts.",
      src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/gamified-en5VrE4YlpOXXaSdCD64Jv1Wldu4c5.jpg",
    },
    {
      head: "Quizzes & Case-Based Scenarios",
      desc: "Challenge yourself with real-world legal case studies and enhance your analytical skills.",
      src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/quizes-dPLBgyEyitLlVOQFoDsiAv5T4dnaYF.jpg",
    },
    {
      head: "Role-Playing Games",
      desc: "Experience immersive courtroom simulations and develop practical advocacy skills.",
      src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/roleplaying-gIS1UNntpkQD2EmeTZKzFXuBPpX9cB.jpg",
    },
    {
      head: "AI-Powered Legal Assistant",
      desc: "Get intelligent, AI-driven legal insights and guidance in real-time when you need it most.",
      src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/aibot-o7GERPwAKQjnSOULWxzY3SO4jE2xgn.jpg",
    },
    {
      head: "Virtual Courtrooms",
      desc: "Step into digital courtrooms and participate in lifelike trials to build confidence.",
      src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/courtrooms-tTDU4J03tXj4TF9BfDsFX6ETqc7keT.jpg",
    },
    {
      head: "AR/VR Based Learning",
      desc: "Immerse yourself in interactive legal environments that bring complex concepts to life.",
      src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/arvr-WpOhLQlSkqPz382ZyZX72e3oJr8gXw.jpg",
    },
  ];

  return (
    <section className="advantage-section">
      <div className="advantage-container">
        <div ref={headerRef} className="advantage-header">
          <h2 className="advantage-title">
            Architectural Pillars of <span className="green">Chotta Vakil</span>
          </h2>
          <div className="advantage-divider"></div>
          <p className="advantage-subtitle">
            Innovative features designed to transform legal education into an
            engaging, effective, and immersive experience for aspiring legal
            professionals.
          </p>
        </div>

        <div className="advantage-grid">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
