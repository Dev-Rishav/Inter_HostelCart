-- Drop the orderHistory table if it exists
DROP TABLE IF EXISTS orderHistory;

-- Create the orderHistory table
CREATE TABLE orderHistory (
    itemNO INT,
    buyerId INT,
    sellerID INT,
    orderDate DATE NOT NULL,
    status VARCHAR(10) NOT NULL,

    CONSTRAINT fk_oh_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT fk_oh_buyer FOREIGN KEY (buyerId) REFERENCES userTable(userID),
    CONSTRAINT fk_oh_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

-- Insert data into the orderHistory table
INSERT INTO orderHistory (buyerId, itemNO, sellerID, orderDate, status) VALUES
(1, 50, 2, STR_TO_DATE('02/03/24', '%m/%d/%y'), 'Done'),
(3, 51, 4, STR_TO_DATE('03/04/24', '%m/%d/%y'), 'Done'),
(7, 52, 8, STR_TO_DATE('04/05/24', '%m/%d/%y'), 'Done'),
(9, 53, 10, STR_TO_DATE('05/06/24', '%m/%d/%y'), 'Done'),
(11, 54, 12, STR_TO_DATE('06/07/24', '%m/%d/%y'), 'Done');

-- Select all data from the orderHistory table
SELECT * FROM orderHistory;


  alter table orderhistory add column totalamount ;
    
    select * from item;
   ALTER TABLE orderhistory;
ALTER COLUMN totalamount TYPE DECIMAL(10, 2);