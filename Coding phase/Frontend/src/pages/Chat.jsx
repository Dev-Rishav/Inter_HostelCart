import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import Cookies from 'js-cookie';

const socket = io('http://localhost:3001'); // Replace with your backend's URL

const Chat = ({ room, user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', room);

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/chat/${room}`);
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    return () => {
      socket.off('receiveMessage');
    };
  }, [room]);

  const handleSendMessage = () => {
    const newMessage = {
      room,
      text: message,
      sender: user,
    };
    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');

    axios.post('http://localhost:3001/api/chat', newMessage)
      .catch(error => console.error('Error saving message:', error));
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