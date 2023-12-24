import React from 'react'

function Games() {
  return (
    <>
     <div className="games-container">
     <iframe src="https://scratch.mit.edu/projects/897583045/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
     </div>
     <div className="game-rules">
      Press the <span className='green'>GREEN</span> flag to replay the game
     </div>
    </>
  )
}

export default Games
