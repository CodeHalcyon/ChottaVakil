import React from "react";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Architectural Pillars of <span className="green">Chotta Vakil</span></h1>
      <div className="advantage-container">
        <AdvantageCard
          head="Gamified Learning Modules"
          desc="Interactive learning for better understanding."
          src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/gamified-en5VrE4YlpOXXaSdCD64Jv1Wldu4c5.jpg"
        />
        <AdvantageCard
          head="Quizzes & Case-Based Scenarios"
          desc="Challenge yourself with legal case studies."
          src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/quizes-dPLBgyEyitLlVOQFoDsiAv5T4dnaYF.jpg"
        />
        <AdvantageCard
          head="Role-Playing Games"
          desc="Experience courtroom simulations."
          src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/roleplaying-gIS1UNntpkQD2EmeTZKzFXuBPpX9cB.jpg"
        />
        <AdvantageCard
          head="AI-Powered Legal Assistant"
          desc="Get AI-driven legal insights in real-time."
          src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/aibot-o7GERPwAKQjnSOULWxzY3SO4jE2xgn.jpg"
        />
        <AdvantageCard
          head="Virtual Courtrooms"
          desc="Step into a digital courtroom and participate in trials."
          src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/courtrooms-tTDU4J03tXj4TF9BfDsFX6ETqc7keT.jpg"
        />
        <AdvantageCard
          head="AR/VR Based Learning"
          desc="Immerse yourself in interactive legal environments."
          src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/arvr-WpOhLQlSkqPz382ZyZX72e3oJr8gXw.jpg"
        />
      </div>
    </>
  );
};

export default Advantage;
