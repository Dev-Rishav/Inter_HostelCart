-- Drop the transaction table if it exists
DROP TABLE IF EXISTS transaction;

-- Create the transaction table
CREATE TABLE transaction (
    tranid INT AUTO_INCREMENT,
    itemno INT,
    sellerid INT,
    buyerid INT,
    soldprice INT NOT NULL,
    solddate DATE NOT NULL,
    itemStatus INT(1) NOT NULL,

    PRIMARY KEY (tranid),
    FOREIGN KEY (itemno) REFERENCES item(itemNO),
    FOREIGN KEY (sellerid) REFERENCES userTable(userID),
    FOREIGN KEY (buyerid) REFERENCES userTable(userID)
);

-- Insert data into the transaction table
INSERT INTO transaction (itemno, sellerid, buyerid, soldprice, solddate, itemstatus) VALUES
(50, 1, 2, 400, STR_TO_DATE('24/03/04', '%d/%m/%y'), 1),
(51, 3, 4, 1000, STR_TO_DATE('24/02/17', '%d/%m/%y'), 1),
(52, 7, 8, 100, STR_TO_DATE('24/04/17', '%d/%m/%y'), 1),
(53, 9, 10, 200, STR_TO_DATE('24/05/17', '%d/%m/%y'), 1),
(54, 11, 12, 300, STR_TO_DATE('24/06/17', '%d/%m/%y'), 1),
(55, 1, 3, 150, STR_TO_DATE('24/07/17', '%d/%m/%y'), 1),
(56, 2, 4, 250, STR_TO_DATE('24/08/17', '%d/%m/%y'), 1),
(57, 7, 9, 350, STR_TO_DATE('24/09/17', '%d/%m/%y'), 1),
(58, 8, 10, 450, STR_TO_DATE('24/10/17', '%d/%m/%y'), 1),
(59, 11, 1, 550, STR_TO_DATE('24/11/17', '%d/%m/%y'), 1),
(60, 2, 3, 650, STR_TO_DATE('24/12/17', '%d/%m/%y'), 1);

-- Select all data from the transaction table
SELECT * FROM transaction;