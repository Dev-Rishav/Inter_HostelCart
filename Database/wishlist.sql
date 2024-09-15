-- Create the wishList table
CREATE TABLE wishList (
    itemNO INT,
    buyerId INT,

    CONSTRAINT fk_wl_buyer FOREIGN KEY (buyerId) REFERENCES userTable(userID),
    CONSTRAINT fk_wl_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

-- Drop the wishList table if it exists
DROP TABLE IF EXISTS wishList;

-- Recreate the wishList table
CREATE TABLE wishList (
    itemNO INT,
    buyerId INT,

    CONSTRAINT fk_wl_buyer FOREIGN KEY (buyerId) REFERENCES userTable(userID),
    CONSTRAINT fk_wl_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

-- Insert data into the wishList table
INSERT INTO wishList (itemNO, buyerId) VALUES 
(9, 219),
(8, 7),
(4, 3),
(11, 10),
(4, 123);

-- Select all data from the wishList table
SELECT * FROM wishList;