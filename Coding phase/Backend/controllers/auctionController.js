const Auction = require("../models/auctionModel");
const Order = require("../models/orderModel");

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
    // console.log("njabfjasdadjkasd");
    // console.log(req.body);

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
        console.log(result.rows[0],"highestBid");
                
        if (!highestBid) {
          return res
            .status(400)
            .json({ error: "No bids placed on this auction" });
        }

        Order.create(highestBid.sellerid,highestBid.userid, highestBid.itemno,highestBid.bidamount, (err, result) => {
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
});

module.exports = auctionController;
