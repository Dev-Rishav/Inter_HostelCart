const pool = require('../config/db');

const User = {
  create: (email,hostel,room,username,dob,phone,hash,dept,course, callback) => {
    const sqlInsert = "INSERT INTO usertable (emailid,hostelno,roomno,username,userdob,userphoneno,userpassword,userdept,usercourse) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9)";
    pool.query(sqlInsert, [email,hostel,room,username,dob,phone,hash,dept,course], callback);
  },
  findByEmail: (email, callback) => {
    const sqlSelect = "SELECT * FROM usertable WHERE emailid = $1";
    pool.query(sqlSelect, [email], callback);
  }
};

module.exports = User;