const pool = require('../config/db');

const Cart = {
  // Retrieve all items in the cart for a specific user
  findByUserId: (userId, callback) => {
    const sqlSelect = `
      SELECT cart.*, item.itemname, item.itemprice, item.itemphotourl
      FROM cart
      JOIN item ON cart.itemno = item.itemno
      WHERE cart.buyerid = $1
    `;
    pool.query(sqlSelect, [userId], callback);
  },

  // Add an item to the cart
  addItem: (userId, itemId, callback) => {
    const sqlInsert = `
      INSERT INTO cart (buyerid, itemno)
      VALUES ($1, $2)
    `;
    pool.query(sqlInsert, [userId, itemId], callback);
  },

  // Remove an item from the cart
  removeItem: (userId, itemId, callback) => {
    const sqlDelete = "DELETE FROM cart WHERE userid = $1 AND itemid = $2";
    pool.query(sqlDelete, [userId, itemId], callback);
  },

  // Update the quantity of an item in the cart
  updateItemQuantity: (userId, itemId, quantity, callback) => {
    const sqlUpdate = "UPDATE cart SET quantity = $3 WHERE userid = $1 AND itemid = $2";
    pool.query(sqlUpdate, [userId, itemId, quantity], callback);
  }
};

module.exports = Cart;