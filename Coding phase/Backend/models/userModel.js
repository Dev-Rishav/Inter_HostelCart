const pool = require('../config/db');

const User = {
  create: (username, hash, email, callback) => {
    const sqlInsert = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    pool.query(sqlInsert, [username, hash, email], callback);
  },
  findByEmail: (email, callback) => {
    const sqlSelect = "SELECT * FROM userTable WHERE emailID = ?";
    pool.query(sqlSelect, [email], callback);
  }
};

module.exports = User;