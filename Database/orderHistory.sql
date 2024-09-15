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

-- Insert multiple rows using a loop
DELIMITER //
CREATE PROCEDURE insert_orderHistory()
BEGIN
    DECLARE i INT DEFAULT 10;
    WHILE i <= 30 DO
        INSERT INTO orderHistory (buyerId, itemNO, sellerID, orderDate, status)
        VALUES (i MOD 12 + 1, 50 + (i MOD 11), (i + 1) MOD 12 + 1, STR_TO_DATE('07/08/24', '%m/%d/%y'), 'Pending');
        SET i = i + 1;
    END WHILE;
END //
DELIMITER ;

-- Call the procedure to insert multiple rows
CALL insert_orderHistory();