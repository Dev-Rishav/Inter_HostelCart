import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); 

const Chat = ({ room }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', room);

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [room]);

  const handleSendMessage = () => {
    const newMessage = {
      room,
      text: message,
      sender: 'User1', // Replace with the actual sender's name or ID
    };
    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat Room: {room}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;