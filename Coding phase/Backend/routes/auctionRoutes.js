const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

module.exports = (io) => {
  const auctionController = require('../controllers/auctionController')(io);

  router.post('/create', authenticateToken, auctionController.createAuction);
  router.get('/:auctionId', auctionController.getAuctionById);
  router.post('/new/bid', authenticateToken, auctionController.placeBid);
  router.get('/:auctionId/highestBid', auctionController.getHighestBid);
  router.get('/:auctionId/bids', auctionController.getBidsByAuctionId);
  router.post('/stop', authenticateToken, auctionController.stopAuction);
  router.get('/item/:itemId', auctionController.getAuctionByItemId);

  return router;
};