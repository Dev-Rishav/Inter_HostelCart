//* 1. Concurrent Bidding Updates
/* Since users are bidding continuously over a 7-day period, concurrent updates to the bidding data can be frequent. Each bid may attempt to:
Check the current highest bid.
Insert or update the highest bid if the new bid is higher.
Deadlock could occur if multiple transactions try to update the same bidding record simultaneously and wait on each other’s locks. */


//* 2. Auction End and Order Placement
/*At the end of the 7-day period, or if the seller stops the auction, the highest bid needs to be locked in and an order placed. This involves:
Checking for the highest bid.
Locking the item to prevent further bids.
Updating the order and the status of the item (e.g., setting it to "sold").
If other bids are still being processed or a user’s session attempts to place a bid right as the auction ends, this could lead to deadlock.*/


// 1. Placing a Bid on an Item in Auction
// Scenario: Multiple users are bidding on the same item simultaneously, and each bid must be processed in sequence.
// Use of Lock: Lock the auction or bidding data to ensure that only one bid can be processed at a time for a given item. This prevents race conditions where two bids might attempt to overwrite each other’s values in the database.
// Type of Lock: Row-level lock on the item or auction entry in the bids table.

`BEGIN;
      LOCK TABLE bids IN EXCLUSIVE MODE;
      INSERT INTO bids (auctionId, userId, bidAmount) VALUES (4, 12, 300) RETURNING *;
      COMMIT;`


//*2. Finalizing the Auction (Closing and Placing Order)
//? Scenario: When the 7-day auction period ends, or the seller decides to stop the auction manually, the highest bid is selected, and an order is placed.
//? Use of Lock: Lock the auction and item entries to prevent any additional bids or modifications while the order is being placed. This ensures that the final order is based on the actual highest bid.
//?Type of Lock: Transaction lock that includes both the auction and order placement tables.
`
BEGIN;

-- Lock the auctions and item tables to prevent any modifications
LOCK TABLE auctions IN EXCLUSIVE MODE;
LOCK TABLE item IN EXCLUSIVE MODE;

-- Retrieve the highest bid for the auction
WITH highest_bid AS (
  SELECT bids.*, item.itemno, item.sellerid
  FROM bids
  JOIN auctions ON bids.auctionId = auctions.auctionId
  JOIN item ON auctions.itemId = item.itemno
  WHERE bids.auctionId = $1
  ORDER BY bids.bidAmount DESC
  LIMIT 1
)
-- Insert the order based on the highest bid
INSERT INTO orders (auctionId, userId, itemId, sellerId, bidAmount)
SELECT auctionId, userId, itemno, sellerid, bidAmount
FROM highest_bid
RETURNING *;

-- Stop the auction by updating its end time
UPDATE auctions
SET endTime = NOW()
WHERE auctionId = $1
RETURNING *;

COMMIT;
`

/*3. Item Availability and Status Update
Scenario: When an auction ends, the item status changes to "sold" or "unavailable" to prevent further bidding.
Use of Lock: Lock the item entry to prevent concurrent operations from changing its availability status (e.g., marking it "sold" while another process tries to mark it "available").
Type of Lock: Row-level lock on the item entry.*/
`
BEGIN;

-- Lock the specific item row to prevent concurrent updates
SELECT 1 FROM item WHERE itemno = $1 FOR UPDATE;

-- Update the item status to "sold" or "unavailable"
UPDATE item
SET status = 'sold'
WHERE itemno = $1
RETURNING *;

COMMIT;`