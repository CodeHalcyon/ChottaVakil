// import React from "react";

// const Messages = ({ text, sender }) => {
//   return (
//     <div className={`messages ${sender === "user" ? "user-msg" : "bot-msg"}`}>
//       {sender === "bot" && (
//         <img src="https://img.freepik.com/free-vector/3d-ai-robot-character-chat-bot-wink-mascot-icon_107791-30020.jpg?ga=GA1.1.430378018.1741506765&semt=ais_hybrid" alt="bot" />
//       )}
//       <div>
//         <p>{text}</p>
//       </div>
//       {sender === "user" && (
//         <img src="http://localhost:3000/images/panda.png" alt="user" />
//       )}
//     </div>
//   );
// };

// export default Messages;
import React from 'react';

const Messages = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      {sender === "bot" && <img src="https://img.freepik.com/free-vector/3d-ai-robot-character-chat-bot-wink-mascot-icon_107791-30020.jpg?ga=GA1.1.430378018.1741506765&semt=ais_hybrid" alt="Bot" className="avatar" />}
      <p>{text}</p>
      {sender === "user" && <img src="http://localhost:3000/images/panda.png" alt="User" className="avatar" />}
    </div>
  );
};

export default Messages;
