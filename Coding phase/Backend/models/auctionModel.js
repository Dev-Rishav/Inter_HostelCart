const pool = require('../config/db');

const Auction = {
  createAuction: (itemId, startingBid, endTime, callback) => {
    const sqlInsert = "INSERT INTO auctions (itemId, startingBid, endTime) VALUES ($1, $2, $3) RETURNING *";
    pool.query(sqlInsert, [itemId, startingBid, endTime], callback);
  },

  getAuctionById: (auctionId, callback) => {
    const sqlSelect = "SELECT * FROM auctions WHERE auctionId = $1";
    pool.query(sqlSelect, [auctionId], callback);
  },

  placeBid: (auctionId, userId, bidAmount, callback) => {
    const sqlInsert = "INSERT INTO bids (auctionId, userId, bidAmount) VALUES ($1, $2, $3) RETURNING *";
    pool.query(sqlInsert, [auctionId, userId, bidAmount], callback);
  },

  getHighestBid: (auctionId, callback) => {
    const sqlSelect = `SELECT bids.*, item.itemno,item.sellerid
      FROM bids
      JOIN auctions ON bids.auctionId = auctions.auctionId
      JOIN item ON auctions.itemId = item.itemno
      WHERE bids.auctionId = $1
      ORDER BY bids.bidAmount DESC
      LIMIT 1`;
    pool.query(sqlSelect, [auctionId], callback);
  },

  getBidsByAuctionId: (auctionId, callback) => {
    const sqlSelect = "SELECT * FROM bids WHERE auctionId = $1 ORDER BY bidAmount DESC";
    pool.query(sqlSelect, [auctionId], callback);
  },

  stopAuction: (auctionId, callback) => {
    console.log(auctionId);
    
    const sqlUpdate = "UPDATE auctions SET endTime = NOW() WHERE auctionId = $1 RETURNING *";
    pool.query(sqlUpdate, [auctionId], callback);
  },
  getAuctionByItemId: (itemId, callback) => {
    const sqlSelect = "SELECT auctionId FROM auctions WHERE itemId = $1";
    pool.query(sqlSelect, [itemId], callback);
  }
};

module.exports = Auction;