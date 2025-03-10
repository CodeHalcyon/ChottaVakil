import React, { useState, useRef, useEffect } from "react";
import Messages from "./Messages";

const Courtroom = () => {
  const [messages, setMessages] = useState([
    {
      text: "Order in the court! We are here to deliberate the case of Aryan Sharma vs. The State. Prosecution, you may begin.",
      sender: "bot",
      time: "11:02 AM",
    },
    {
      text: "Your Honor, we present undeniable CCTV footage showing Aryan Sharma near the crime scene at 11:30 PM, just minutes before the theft occurred. The store owner also confirms that he saw someone resembling Aryan.",
      sender: "bot",
      time: "11:03 AM",
    },
    {
      text: "Your Honor, being near the crime scene does not mean Aryan committed the theft. My client was simply passing by on his way home. Moreover, the footage is unclear, and we request a forensic examination.",
      sender: "user",
      time: "11:04 AM",
    },
    {
      text: "But the store owner has identified him! He saw Aryan lurking outside multiple times before the theft. That clearly establishes intent.",
      sender: "bot",
      time: "11:05 AM",
    },
    {
      text: "Objection! Eyewitness testimony is unreliable. Studies show that memory recall can be faulty, especially in stressful situations. Does the prosecution have any direct evidence—such as fingerprints or stolen items found on Aryan?",
      sender: "user",
      time: "11:06 AM",
    },
    {
      text: "Your Honor, while we do not have fingerprints, we have circumstantial evidence. Aryan Sharma was seen fleeing the area soon after the theft. Why would an innocent man run unless he had something to hide?",
      sender: "bot",
      time: "11:07 AM",
    },
    {
      text: "Your Honor, my client ran because he heard a loud noise and got scared. Running does not prove guilt. In fact, no stolen watch was found in his possession. The prosecution is making assumptions, not presenting hard facts.",
      sender: "user",
      time: "11:08 AM",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatboxRef = useRef(null);

  // Auto-scroll to the bottom of chat when new messages arrive
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `${hours % 12 || 12}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${hours >= 12 ? "PM" : "AM"}`;

    // Add user message
    setMessages([
      ...messages,
      { text: input, sender: "user", time: timeString },
    ]);
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      setIsTyping(false);

      // Sample responses based on typical courtroom exchanges
      const botResponses = [
        "Your Honor, the defense's argument lacks substance. The evidence clearly points to the defendant's guilt.",
        "I must object to this line of reasoning. The defense is speculating without factual basis.",
        "Your Honor, we have established motive, opportunity, and circumstantial evidence that all point to the defendant.",
        "The court should consider the pattern of behavior demonstrated by the defendant prior to the incident.",
        "The prosecution stands by the reliability of our witness testimonies and evidence presented.",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      setMessages((prev) => [
        ...prev,
        {
          text: randomResponse,
          sender: "bot",
          time: timeString,
        },
      ]);
    }, 1500);
  };

  return (
    <div className="courtroom-cont-cont">
      {/* Left Side Information Panel */}
      <div className="courtroom-container-left">
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/02/29/30/94/360_F_229309417_sQpmxV6JEK5PBlhrjSpTz6WGHZaZv6od.jpg"
            alt="courtroom scene"
          />
        </div>
        <div>
          <h1>Interactive Courtroom Sessions</h1>
          <p>
            Welcome to Chotta Vakil – your virtual courtroom experience! Step
            into the shoes of a defense lawyer and engage in interactive legal
            battles against our AI-powered prosecutor.
          </p>
          <ul>
            <li>Realistic courtroom debates and proceedings</li>
            <li>Simulated case trials on contemporary legal topics</li>
            <li>Learn about laws & rights in a dynamic, engaging way</li>
            <li>Develop your legal reasoning and argumentation skills</li>
          </ul>
        </div>
      </div>

      {/* Chatbot-style Courtroom */}
      <div className="courtroom">
        <div className="chat-header">
          <img
            src="https://img.freepik.com/free-vector/3d-ai-robot-character-chat-bot-wink-mascot-icon_107791-30020.jpg"
            alt="Courtroom Bot"
          />
          <div className="chat-header-text">
            <h1>⚖️ Virtual Courtroom</h1>
            <p>Case: State v. Aryan Sharma</p>
          </div>
          <div className="status">
            <span className="status-dot"></span>
            Live Session
          </div>
        </div>

        <div className="chatbox" ref={chatboxRef}>
          <div className="welcome-message">
            <h2>The Court is Now in Session</h2>
            <p>
              You are the defense attorney for Aryan Sharma. Present your
              arguments to defend your client.
            </p>
          </div>

          {messages.map((msg, index) => (
            <Messages
              key={index}
              text={msg.text}
              sender={msg.sender}
              time={msg.time}
            />
          ))}

          {isTyping && (
            <div className="typing-indicator">
              <img
                src="https://img.freepik.com/free-vector/3d-ai-robot-character-chat-bot-wink-mascot-icon_107791-30020.jpg"
                alt="Prosecutor"
                className="avatar"
              />
              <div className="typing-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
        </div>

        <div className="chatinput">
          <input
            type="text"
            placeholder="Enter your defense argument..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courtroom;
