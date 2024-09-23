-- Drop the item table if it exists
DROP TABLE IF EXISTS item;

-- Create the item table
CREATE TABLE item (
    itemNO INT AUTO_INCREMENT,
    sellerID INT,
    itemName VARCHAR(40) NOT NULL,
    itemPrice INT NOT NULL,
    itemDescription VARCHAR(100),
    itemTags VARCHAR(30) NOT NULL,
    listingDate DATE NOT NULL,
    reportflag INT(1),
    itemVisit INT,
    
    CONSTRAINT fk_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT pk_item PRIMARY KEY (itemNO)
);

-- Insert data into the item table
INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit) VALUES
(1, 'TP-Link Router 2.4GHz', 500, '6 months old, in very good condition, white in color', 'Router,Electronics', STR_TO_DATE('03/04/24', '%m/%d/%y'), 0, 1),
(2, 'Havells Air Cooler', 6000, '6 months old, in very good condition, white in color', 'Cooler,Electronics', STR_TO_DATE('02/03/24', '%m/%d/%y'), 0, 9),
(3, 'Smartphone', 5000, 'Brand new smartphone with latest features', 'Electronics', STR_TO_DATE('03/04/2003', '%m/%d/%Y'), 0, 105),
(4, 'Laptop', 10990, 'High-performance laptop for professional use', 'Electronics', STR_TO_DATE('05/08/2019', '%m/%d/%Y'), 0, 92),
(7, 'Camera', 1600, 'DSLR camera with 4K recording capabilities', 'Electronics', STR_TO_DATE('12/12/2023', '%m/%d/%Y'), 0, 75),
(8, 'Gaming Console', 800, 'Next-gen gaming console for immersive gaming', 'Electronics', STR_TO_DATE('02/02/2024', '%m/%d/%Y'), 0, 11),
(9, 'Tablet', 800, 'Lightweight tablet for on-the-go productivity', 'Electronics', STR_TO_DATE('01/03/2024', '%m/%d/%Y'), 0, 25),
(10, 'Fitness Tracker', 200, 'Track your fitness goals with this smart band', 'Electronics', STR_TO_DATE('03/02/2024', '%m/%d/%Y'), 0, 19),
(11, 'Blue T-shirt', 200, 'A comfortable blue cotton t-shirt', 'clothing', STR_TO_DATE('03/04/24', '%m/%d/%y'), 0, 5),
(12, 'Samsung Mobile', 3999, 'Brand new mobile with 128GB storage', 'electronics phone', STR_TO_DATE('03/05/24', '%m/%d/%y'), 0, 3),
(1, 'Leather Wallet', 135, 'Brown leather wallet with multiple card slots', 'accessories', STR_TO_DATE('04/05/24', '%m/%d/%y'), 0, 7),
(2, 'Wireless Mouse', 315, 'Ergonomic design, compatible with all devices', 'electronics', STR_TO_DATE('03/05/24', '%m/%d/%y'), 0, 2),
(3, 'Floral Dress', 449, 'Elegant floral pattern dress suitable for parties', 'clothing dress', STR_TO_DATE('06/06/24', '%m/%d/%y'), 0, 10),
(4, 'Coffee Mug Set', 120, 'Set of 4 ceramic mugs with different colors', 'kitchen home', STR_TO_DATE('07/12/24', '%m/%d/%y'), 0, 2),
(7, 'Coffee Mug Set', 220, 'Set of 4 ceramic mugs with different colors', 'kitchen home', STR_TO_DATE('07/12/24', '%m/%d/%y'), 0, 2);

-- Select all data from the item table
SELECT * FROM item;


ALTER TABLE item MODIFY COLUMN itemPhotoURL VARCHAR(512);

INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL) VALUES
(8, 'TP-Link Router 2.4GHz', 500, '6 months old, in very good condition, white in color', 'Router,Electronics', STR_TO_DATE('03/04/24', '%m/%d/%y'), 0, 1, 'https://imgs.search.brave.com/XR7yynlmH6a-KNQbaKvSAJTKcIJ6hlZbmD9HXEubayA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFEeWEwbDJ4d0wu/anBn'),
(2, 'Havells Air Cooler', 6000, '6 months old, in very good condition, white in color', 'Cooler,Electronics', STR_TO_DATE('02/03/24', '%m/%d/%y'), 0, 9, 'https://imgs.search.brave.com/lX6X_TiV-7QhIxUZBoOwF6lpUb40O9JxPTpfssiO90Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF1c0FDM1ZCREwu/anBn'),
(3, 'Smartphone', 5000, 'Brand new smartphone with latest features', 'Electronics', STR_TO_DATE('03/04/2003', '%m/%d/%Y'), 0, 105, 'https://www.istockphoto.com/photos/android-phone'),
(4, 'Laptop', 10990, 'High-performance laptop for professional use', 'Electronics', STR_TO_DATE('05/08/2019', '%m/%d/%Y'), 0, 92, 'https://imgs.search.brave.com/p3EuDGCoEomIF1qfXco8ZkK1Tmy5-zBOdwYUgAZgX9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjIzNzEwL3Bob3Rv/L2xhcHRvcC1mbG9h/dGluZy1hbmdsZWQt/b3Blbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Z1VpZkph/cDRkRmtHeW5MQkFz/Q0NCdFR4eWpNNTEx/eTAtODVGLW50R092/VT0'),
(7, 'Camera', 1600, 'DSLR camera with 4K recording capabilities', 'Electronics', STR_TO_DATE('12/12/2023', '%m/%d/%Y'), 0, 75, 'https://imgs.search.brave.com/wgThZOJSAJxAHjMHsNMIGjlGm_qc3frt7Eh2S4oQHGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw');

UPDATE item SET itemPhotoURL = 'https://imgs.search.brave.com/XR7yynlmH6a-KNQbaKvSAJTKcIJ6hlZbmD9HXEubayA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFEeWEwbDJ4d0wu/anBn' WHERE itemName = 'TP-Link Router 2.4GHz';
UPDATE item SET itemPhotoURL = 'https://imgs.search.brave.com/lX6X_TiV-7QhIxUZBoOwF6lpUb40O9JxPTpfssiO90Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF1c0FDM1ZCREwu/anBn' WHERE itemName = 'Havells Air Cooler';
UPDATE item SET itemPhotoURL = 'https://imgs.search.brave.com/wgThZOJSAJxAHjMHsNMIGjlGm_qc3frt7Eh2S4oQHGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw' WHERE itemName = 'Smartphone';
UPDATE item SET itemPhotoURL = 'https://imgs.search.brave.com/p3EuDGCoEomIF1qfXco8ZkK1Tmy5-zBOdwYUgAZgX9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MjIzNzEwL3Bob3Rv/L2xhcHRvcC1mbG9h/dGluZy1hbmdsZWQt/b3Blbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Z1VpZkph/cDRkRmtHeW5MQkFz/Q0NCdFR4eWpNNTEx/eTAtODVGLW50R092/VT0' WHERE itemName = 'Laptop';
