const db = require('../config/db');

const Item = {
  getAll: (callback) => {
    const sqlSelect = "SELECT * FROM item";
    db.query(sqlSelect, callback);
  },
  create: (itemData, callback) => {
    const sqlInsert = "INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, itemData, callback);
  },
  getByGenderAndSeller: (gender, sellerID, callback) => {
    const sqlSelect = `SELECT * FROM item WHERE gender = ? AND sellerID = ?`;
    db.query(sqlSelect, [gender, sellerID], callback);
  }
};

module.exports = Item;