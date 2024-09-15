-- Drop the soldHistory table if it exists
DROP TABLE IF EXISTS soldHistory;

-- Create the soldHistory table
CREATE TABLE soldHistory (
    transactionID VARCHAR(50) PRIMARY KEY,
    itemNO INT NOT NULL,
    sellerID INT NOT NULL,
    soldPrice INT,
    soldDate DATE NOT NULL,

    CONSTRAINT fk_sh_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT fk_sh_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

-- Insert data into the soldHistory table
INSERT INTO soldHistory (transactionID, itemNO, sellerID, soldPrice, soldDate) VALUES
('abcd1234xyz', 50, 1, 400, STR_TO_DATE('15/04/2024', '%d/%m/%Y')),
('abcd219xyz', 51, 2, 5500, STR_TO_DATE('20/06/2024', '%d/%m/%Y')),
('abcd216xyz', 52, 3, 150, STR_TO_DATE('10/04/2024', '%d/%m/%Y')),
('abdc123xyz', 53, 4, 130, STR_TO_DATE('15/05/2024', '%d/%m/%Y'));

-- Select all data from the soldHistory table
SELECT * FROM soldHistory;


-- what is the need of this table?
-- how can I handle this table effieceintly to make queries faster?