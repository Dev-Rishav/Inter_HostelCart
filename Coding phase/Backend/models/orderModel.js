const pool = require('../config/db');

const Order = {
  // Create a new order
  create: (userId, items, totalAmount, callback) => {
    const sqlInsert = "INSERT INTO orderhistory (userID, items, totalAmount) VALUES ($1, $2, $3) RETURNING *";
    pool.query(sqlInsert, [userId, JSON.stringify(items), totalAmount], callback);
  },

  // Retrieve all orders for a specific user
  findByUserId: (userId, callback) => {
    const sqlSelect = `SELECT 
        item.*, 
        usertable.username, 
        usertable.hostelno, 
        usertable.roomno, 
        usertable.userdept, 
        usertable.usercourse 
      FROM orderhistory
      JOIN item ON orderhistory.itemno = item.itemno
      JOIN usertable ON orderhistory.sellerid = usertable.userid
      WHERE orderhistory.buyerid = $1`;
    pool.query(sqlSelect, [userId], callback);
  },

  // Retrieve a specific order by order ID
  findById: (orderId, callback) => {
    const sqlSelect = "SELECT * FROM orderhistory WHERE orderID = $1";
    pool.query(sqlSelect, [orderId], callback);
  }
};

module.exports = Order;