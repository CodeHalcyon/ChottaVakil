import React from "react";
function Games() {
  return (
    <section className="games-showcase">
      <div className="games-showcase-header">
        <h2>Interactive Learning Games</h2>
        <p className="games-subtitle">Engage with our educational legal simulations</p>
      </div>
      
      <div className="games-container">
        <div className="game-frame-wrapper">
          <iframe
            src="https://scratch.mit.edu/projects/897583045/embed"
            allowTransparency="true"
            width="485"
            height="402"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
          
          <div className="game-badge">Featured Game</div>
        </div>
        
        <div className="game-info">
          <h3>Legal Defender Challenge</h3>
          <p>Put your legal knowledge to the test! Navigate through real-world scenarios and make decisions based on legal principles.</p>
          <div className="game-stats">
            <div className="stat">
              <span className="stat-value">4.8</span>
              <span className="stat-label">Rating</span>
            </div>
            <div className="stat">
              <span className="stat-value">5k+</span>
              <span className="stat-label">Plays</span>
            </div>
            <div className="stat">
              <span className="stat-value">15</span>
              <span className="stat-label">Levels</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="game-rules">
        <div className="instruction-card">
          <div className="instruction-icon">▶️</div>
          <div className="instruction-text">
            Press the <span className="green">GREEN</span> flag to start or replay the game
          </div>
        </div>
      </div>
      
      <div className="games-cta">
        <button className="more-games-btn">Explore All Games</button>
      </div>
    </section>
  );
}

export default Games;