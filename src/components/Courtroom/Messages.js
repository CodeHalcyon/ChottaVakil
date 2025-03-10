import React from 'react';

const Messages = ({ text, sender, time }) => {
  return (
    <div className={`message ${sender}`}>
      {sender === "bot" && 
        <img 
          src="https://img.freepik.com/free-vector/3d-ai-robot-character-chat-bot-wink-mascot-icon_107791-30020.jpg" 
          alt="Prosecutor" 
          className="avatar" 
        />
      }
      <p data-time={time}>{text}</p>
      {sender === "user" && 
        <img 
          src="/images/panda.png" 
          alt="Defense Attorney" 
          className="avatar" 
        />
      }
    </div>
  );
};

export default Messages;