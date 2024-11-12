// 1. Automatically Updating Auction Status
// Scenario: Change auction status to "closed" when the end date is reached or when the seller stops the auction.
// Trigger:

`CREATE OR REPLACE FUNCTION update_auction_status()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.end_date < NOW() OR NEW.stop_auction IS TRUE THEN
    NEW.status := 'closed';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_auction_status
BEFORE UPDATE ON auction
FOR EACH ROW
EXECUTE FUNCTION update_auction_status();
`

// 2. Placing an Order for the Highest Bidder
// Scenario: When the auction ends, create an order for the highest bidder.
// Trigger:

`CREATE OR REPLACE FUNCTION place_order_for_highest_bid()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'closed' THEN
    INSERT INTO orders (item_id, user_id, bid_amount, status)
    SELECT item_id, user_id, bid_amount, 'pending'
    FROM bids
    WHERE auction_id = NEW.id
    ORDER BY bid_amount DESC
    LIMIT 1;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_place_order
AFTER UPDATE ON auction
FOR EACH ROW
EXECUTE FUNCTION place_order_for_highest_bid();

`

// 3. Updating Item Availability on Auction Completion
// Scenario: Update item availability to "sold" after an order is placed.
// Trigger:
`
CREATE OR REPLACE FUNCTION update_item_status_on_order()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE items SET availability = 'sold' WHERE id = NEW.item_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_item_status
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION update_item_status_on_order();
`


// 4. Maintaining Bid History Log
// Scenario: Log each new or updated bid in a bid history table.
// Trigger:



`CREATE OR REPLACE FUNCTION log_bid_history()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO bid_history (auction_id, user_id, bid_amount, bid_time)
  VALUES (NEW.auction_id, NEW.user_id, NEW.bid_amount, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_log_bid_history
AFTER INSERT OR UPDATE ON bids
FOR EACH ROW
EXECUTE FUNCTION log_bid_history();`


// 5. Sending Notifications on Key Events
// Scenario: Insert a notification record when a new bid is placed.
// Trigger:
`
CREATE OR REPLACE FUNCTION notify_new_bid()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO notifications (user_id, message, created_at)
  VALUES (NEW.user_id, 'A new bid has been placed!', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_notify_new_bid
AFTER INSERT ON bids
FOR EACH ROW
EXECUTE FUNCTION notify_new_bid();`


// 6. Updating User Ranking or Reputation
// Scenario: Increase user reputation when an order is created.
// Trigger:
`
CREATE OR REPLACE FUNCTION update_user_reputation()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE users SET reputation_score = reputation_score + 10 WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_reputation
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION update_user_reputation();`



// 7. Audit Logging for Sensitive Changes
// Scenario: Track any updates to sensitive fields like price in the items table.
// Trigger:
`
CREATE OR REPLACE FUNCTION audit_item_changes()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO audit_log (item_id, action, old_value, new_value, changed_at)
  VALUES (OLD.id, 'update', OLD.price, NEW.price, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_audit_item_changes
AFTER UPDATE ON items
FOR EACH ROW
EXECUTE FUNCTION audit_item_changes();`

// 8. Bid Validation
// Scenario: Ensure a new bid is higher than the current highest bid for the auction.
// Trigger:

`
CREATE OR REPLACE FUNCTION validate_bid()
RETURNS TRIGGER AS $$
DECLARE
  highest_bid DECIMAL;
BEGIN
  SELECT MAX(bid_amount) INTO highest_bid FROM bids WHERE auction_id = NEW.auction_id;
  IF NEW.bid_amount <= highest_bid THEN
    RAISE EXCEPTION 'Bid amount must be higher than the current highest bid.';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_validate_bid
BEFORE INSERT ON bids
FOR EACH ROW
EXECUTE FUNCTION validate_bid();`