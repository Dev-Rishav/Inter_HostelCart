const Auction = require("../models/auctionModel");
const Order = require("../models/orderModel");
const pool = require('../config/db');

const auctionController = (io) => ({
  createAuction: (req, res) => {
    const { itemId, startingBid, endTime } = req.body;

    Auction.createAuction(itemId, startingBid, endTime, (err, result) => {
      if (err) {
        console.error("Error creating auction:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res
        .status(201)
        .json({
          message: "Auction created successfully",
          auction: result.rows[0],
        });
    });
  },

  getAuctionById: (req, res) => {
    const { auctionId } = req.params;

    Auction.getAuctionById(auctionId, (err, result) => {
      if (err) {
        console.error("Error fetching auction:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ auction: result.rows[0] });
    });
  },

  placeBid: (req, res) => {
    const { auctionId, userId, bidAmount } = req.body;

    Auction.placeBid(auctionId, userId, bidAmount, (err, result) => {
      if (err) {
        console.error("Error placing bid:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      io.to(auctionId).emit("newBid", result.rows[0]); // Emit new bid event
      res
        .status(201)
        .json({ message: "Bid placed successfully", bid: result.rows[0] });
    });
  },

  getHighestBid: (req, res) => {
    const { auctionId } = req.params;

    Auction.getHighestBid(auctionId, (err, result) => {
      if (err) {
        console.error("Error fetching highest bid:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ highestBid: result.rows[0] });
    });
  },

  getBidsByAuctionId: (req, res) => {
    const { auctionId } = req.params;

    Auction.getBidsByAuctionId(auctionId, (err, result) => {
      if (err) {
        console.error("Error fetching bids:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ bids: result.rows });
    });
  },

  stopAuction: (req, res) => {
    const { auctionId } = req.body;

    Auction.stopAuction(auctionId, (err, result) => {
      if (err) {
        console.error("Error stopping auction:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      Auction.getHighestBid(auctionId, (err, result) => {
        if (err) {
          console.error("Error fetching highest bid:", err);
          return res.status(500).json({ error: "Internal server error" });
        }

        const highestBid = result.rows[0];
        if (!highestBid) {
          return res
            .status(400)
            .json({ error: "No bids placed on this auction" });
        }

        Order.create(highestBid.sellerid, highestBid.userid, highestBid.itemno, highestBid.bidamount, (err, result) => {
          if (err) {
            console.error("Error creating order:", err);
            return res.status(500).json({ error: "Internal server error" });
          }
          res
            .status(201)
            .json({
              message: "Auction stopped and order created successfully",
              order: result.rows[0],
            });
        });
      });
    });
  },

  getAuctionByItemId: (req, res) => {
    const { itemId } = req.params;

    Auction.getAuctionByItemId(itemId, (err, result) => {
      if (err) {
        console.error("Error fetching auction:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Auction not found" });
      }
      res.json({ auctionId: result.rows[0].auctionid });
    });
  },

  finalizeAuction: (req, res) => {
    const { auctionId } = req.params;

    pool.connect((err, client, done) => {
      if (err) throw err;

      const shouldAbort = (err) => {
        if (err) {
          client.query('ROLLBACK', (err) => {
            if (err) {
              console.error('Error rolling back client', err.stack);
            }
            done();
          });
          res.status(500).json({ error: "Internal server error" });
        }
        return !!err;
      };

      client.query('BEGIN', (err) => {
        if (shouldAbort(err)) return;

        client.query('LOCK TABLE auctions, item IN EXCLUSIVE MODE', (err) => {
          if (shouldAbort(err)) return;

          Auction.getHighestBid(auctionId, (err, result) => {
            if (shouldAbort(err)) return;

            const highestBid = result.rows[0];
            if (!highestBid) {
              client.query('ROLLBACK', (err) => {
                if (err) {
                  console.error('Error rolling back client', err.stack);
                }
                done();
              });
              return res.status(404).json({ error: "No bids found for this auction" });
            }

            const { userId, bidAmount } = highestBid;
            const orderDetails = {
              auctionId,
              userId,
              bidAmount,
              itemId: highestBid.itemno,
              sellerId: highestBid.sellerid
            };

            Order.createOrder(orderDetails, (err, orderResult) => {
              if (shouldAbort(err)) return;

              Auction.stopAuction(auctionId, (err, stopResult) => {
                if (shouldAbort(err)) return;

                client.query('COMMIT', (err) => {
                  if (err) {
                    console.error('Error committing transaction', err.stack);
                    res.status(500).json({ error: "Internal server error" });
                  } else {
                    res.status(200).json({
                      message: "Auction finalized and order placed successfully",
                      order: orderResult.rows[0],
                      auction: stopResult.rows[0]
                    });
                  }
                  done();
                });
              });
            });
          });
        });
      });
    });
  }
});

module.exports = auctionController;