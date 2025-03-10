import React, { useState } from "react";
import Messages from "./Messages";

const Courtroom = () => {
  const [messages, setMessages] = useState([
    {
      text: "Order in the court! We are here to deliberate the case of Aryan Sharma vs. The State. Prosecution, you may begin.",
      sender: "bot",
    },
    {
      text: "Your Honor, we present undeniable CCTV footage showing Aryan Sharma near the crime scene at 11:30 PM, just minutes before the theft occurred. The store owner also confirms that he saw someone resembling Aryan.",
      sender: "bot",
    },
    {
      text: "Your Honor, being near the crime scene does not mean Aryan committed the theft. My client was simply passing by on his way home. Moreover, the footage is unclear, and we request a forensic examination.",
      sender: "user",
    },
    {
      text: "But the store owner has identified him! He saw Aryan lurking outside multiple times before the theft. That clearly establishes intent.",
      sender: "bot",
    },
    {
      text: "Objection! Eyewitness testimony is unreliable. Studies show that memory recall can be faulty, especially in stressful situations. Does the prosecution have any direct evidence—such as fingerprints or stolen items found on Aryan?",
      sender: "user",
    },
    {
      text: "Your Honor, while we do not have fingerprints, we have circumstantial evidence. Aryan Sharma was seen fleeing the area soon after the theft. Why would an innocent man run unless he had something to hide?",
      sender: "bot",
    },
    {
      text: "Your Honor, my client ran because he heard a loud noise and got scared. Running does not prove guilt. In fact, no stolen watch was found in his possession. The prosecution is making assumptions, not presenting hard facts.",
      sender: "user",
    },
    {
      text: "Then why did Aryan change his statement during initial questioning? First, he said he was at a friend’s house; then he claimed he was walking home. Inconsistent statements indicate deception.",
      sender: "bot",
    },
    {
      text: "Not at all, Your Honor. My client was nervous and scared during the interrogation. The police often pressure suspects, leading to confusion. In fact, we have a witness—Aryan’s neighbor—who saw him return home at 11:40 PM, just after the alleged theft. That gives him an alibi!",
      sender: "user",
    },
    {
      text: "Your Honor, we need to question this so-called witness. However, the fact remains that Aryan had a motive—he recently lost his job and was struggling financially. Doesn't that suggest he had a reason to commit the crime?",
      sender: "bot",
    },
    {
      text: "Your Honor, having financial struggles does not make someone a thief! Many people face difficulties, but that does not mean they commit crimes. Where is the direct evidence linking Aryan to the stolen watch?",
      sender: "user",
    },
    {
      text: "We are confident, Your Honor, that justice will be served.",
      sender: "bot",
    },
    {
      text: "And we trust the court to evaluate the evidence fairly.",
      sender: "user",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <>
      <div className="courtroom-cont-cont">
        <div className="courtroom-container-left">
          <div>
            <img
              src="https://t3.ftcdn.net/jpg/02/29/30/94/360_F_229309417_sQpmxV6JEK5PBlhrjSpTz6WGHZaZv6od.jpg"
              alt="courtroom image"
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
              <li>Realistic courtroom debates </li>
              <li>Simulated case trials on legal topics</li>
              <li>Learn about laws & rights in a dynamic way</li>
            </ul>
          </div>
        </div>
        <div className="courtroom">
          <h1>
            ⚖️ <span>Interactive Courtroom</span>
          </h1>

          <div className="chatbox">
            {messages.map((msg, index) => (
              <Messages key={index} text={msg.text} sender={msg.sender} />
            ))}
          </div>

          <div className="chatinput">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courtroom;
