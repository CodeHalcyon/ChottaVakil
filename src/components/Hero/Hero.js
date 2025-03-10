import React from "react";
import Games from "../games/games";
import Courtroom from "../Courtroom/Courtroom";
import Advantage from "../Advantage/Advantage";
import Programs from "../ProgramCard/Programs";
export default function Hero() {
  return (
    <>
      <section className="hero-section">
        {/* Decorative background elements */}
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Empowering young minds with{" "}
                <span className="highlight-text">Legal Knowledge</span>
              </h1>
              <p className="hero-subtitle">
                Interactive learning experiences to build understanding of law,
                justice, and civic responsibility
              </p>
              <div className="hero-cta">
                <a href="#offer" className="hero-btn primary-btn">
                  Learn More <span className="arrow">→</span>
                </a>
                <a href="#programs" className="hero-btn secondary-btn">
                  Explore Programs
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <img
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/hero-kucYQ9IVUdbfQaRPLySX20v9Z02rMr.png"
                alt="Young students learning about legal concepts"
                className="hero-image"
              />
              <div className="image-badge">
                <span className="badge-text">Interactive Learning</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-text">Scroll to discover</div>
          <div className="scroll-icon"></div>
        </div>
      </section>
      <Advantage />
      <Programs />
      <Games />
      <Courtroom />
    </>
  );
}
