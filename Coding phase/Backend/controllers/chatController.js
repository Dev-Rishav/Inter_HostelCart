const Chat = require('../models/chatModel');

const chatController = {
  getMessages: (req, res) => {
    const { room } = req.params;

    Chat.findByRoom(room, (err, result) => {
      if (err) {
        console.error('Error fetching messages:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ messages: result.rows });
    });
  },

  saveMessage: (req, res) => {
    const { room, senderID, receiverID, itemNO, messageContent } = req.body;

    Chat.saveMessage(room, senderID, receiverID, itemNO, messageContent, (err, result) => {
      if (err) {
        console.error('Error saving message:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(201).json({ message: 'Message saved successfully' });
    });
  }
};

module.exports = chatController;