const pool = require('../config/db');

const Cart = {
  // Retrieve all items in the cart for a specific user
  findByUserId: (userId, callback) => {
    const sqlSelect = "SELECT * FROM cart WHERE userID = $1";
    pool.query(sqlSelect, [userId], callback);
  },

  // Add an item to the cart
  addItem: (userId, itemId, quantity, callback) => {
    const sqlInsert = "INSERT INTO wishlist (userID, itemID, quantity) VALUES ($1, $2, $3) ON CONFLICT (userID, itemID) DO UPDATE SET quantity = cart.quantity + $3";
    pool.query(sqlInsert, [userId, itemId, quantity], callback);
  },

  // Remove an item from the cart
  removeItem: (userId, itemId, callback) => {
    const sqlDelete = "DELETE FROM cart WHERE userID = $1 AND itemID = $2";
    pool.query(sqlDelete, [userId, itemId], callback);
  },

  // Update the quantity of an item in the cart
  updateItemQuantity: (userId, itemId, quantity, callback) => {
    const sqlUpdate = "UPDATE cart SET quantity = $3 WHERE userID = $1 AND itemID = $2";
    pool.query(sqlUpdate, [userId, itemId, quantity], callback);
  }
};

module.exports = Cart;