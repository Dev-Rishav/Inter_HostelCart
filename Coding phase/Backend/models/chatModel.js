const pool = require('../config/db');

const Chat = {
  findByRoom: (room, callback) => {
    const sqlSelect = "SELECT * FROM chatService WHERE room = $1 ORDER BY messageTime ASC";
    pool.query(sqlSelect, [room], callback);
  },

  saveMessage: (room, senderID, receiverID, itemNO, messageContent, callback) => {
    const sqlInsert = "INSERT INTO chatService (room, senderID, receiverID, itemNO, messageTime, messageContent, report) VALUES ($1, $2, $3, $4, NOW(), $5, false)";
    pool.query(sqlInsert, [room, senderID, receiverID, itemNO, messageContent], callback);
  }
};

module.exports = Chat;