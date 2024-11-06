const pool = require('../config/db');

const User = {
  create: (username, hash, email, callback) => {
    const sqlInsert = "INSERT INTO usertable (username, userpassword, emailid) VALUES ($1, $2, $3)";
    pool.query(sqlInsert, [username, hash, email], callback);
  },
  findByEmail: (email, callback) => {
    const sqlSelect = "SELECT * FROM usertable WHERE emailid = $1";
    pool.query(sqlSelect, [email], callback);
  }
};

module.exports = User;