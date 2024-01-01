import React, { useState } from 'react';
import './App.css';

const SciastraChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [chatVisible, setChatVisible] = useState(true);

  const toggleChatVisibility = () => {
    setChatVisible(!chatVisible);
  };

  const sciastraData = {
    questions: [
      "What is Sciastra's mission?",
      "How can I contact Sciastra?",
      "Tell me about Sciastra's services?",
      "Tell me about Sciastra's features?",
      "What courses should sciastra offer?",
      "How many student's get placed in reputed institution?",
      "how much fees this organization should take for jee course?",
      "how much fees this organization should take for IISER course?",
      "Tell me about faculty?",
      "can I get test series?"
      // Add more questions related to Sciastra
    ],
    answers: [
      "Sciastra is dedicated to their students,they give good service.",
      "You can contact Sciastra by email or whatsapp.",
      "Sciastra provides services such as proper construction of course for thei student.",
      "Sciastra give some features like proper faculty,proper videos of courses ,minute detailing about every topic.",
      " Sciastra offer vairious courses for jee neet IIser and many other.",
      "More than 10000 student get placed in reputed institution.",
      "Sciastra take in between 5000 to 6000 for jee course.",
      "Sciastra take in between 60000 to 70000 for IIser course.",
      "There are more than 1000 plus responsible faculty in our organization.",
      "Yes,we provide test series."
      // Add corresponding answers here
    ],
  };

  const findAnswer = (userQuestion) => {
    const index = sciastraData.questions.findIndex(
      (question) => question.toLowerCase() === userQuestion.toLowerCase()
    );

    return index !== -1 ? sciastraData.answers[index] : "I'm sorry, I don't have information about that.";
  };

  const appendMessage = (sender, message) => {
    setMessages([
      ...messages,
      { sender: 'user', message: userInput },
      { sender, message },
    ]);
  };


  const sendMessage = () => {
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);

    // Simulate fetching a response from the API
    const response = findAnswer(userInput);

    // Simulate delay for a more realistic experience
    setTimeout(() => {
      appendMessage('bot', response);
    }, 500);

    setUserInput('');
  };

  return (
    <div className={`sciastra-chatbot ${chatVisible ? 'visible' : 'hidden'}`}>
      <div className="chat-container">
        <div className="chat-header">
          <h2>Sciastra Chat</h2>
          <div className="chat-close" onClick={toggleChatVisibility}>
            &times;
          </div>
        </div>
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default SciastraChatbot;        