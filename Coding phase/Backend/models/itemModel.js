const pool = require('../config/db');

const Item = {
  getAll: (callback) => {
    const sqlSelect = "SELECT * FROM item";
    pool.query(sqlSelect, callback);
  },
  create: (itemData, callback) => {
    const sqlInsert = "INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    pool.query(sqlInsert, itemData, callback);
  },
  getByGenderAndSeller: (gender, sellerID, callback) => {
    const sqlSelect = "SELECT * FROM item WHERE gender = $1 AND sellerID = $2";
    pool.query(sqlSelect, [gender, sellerID], callback);
  }
};

module.exports = Item;