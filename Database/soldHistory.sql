	CREATE TABLE soldHistory (
    transactionID VARCHAR(50) PRIMARY KEY,
    itemNO INT NOT NULL,
    sellerID INT NOT NULL,
    soldPrice INT,
    soldDate DATE NOT NULL,

    CONSTRAINT fk_sh_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT fk_sh_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);
	
	

INSERT INTO soldHistory (transactionID,itemNO,sellerID,soldPrice,soldDate) VALUES
	 ('abcd1234xyz',11,1,400,'2024-04-15'),
	 ('abcd216xyz',12,3,150,'2024-04-10'),
	 ('abcd219xyz',11,2,5500,'2024-06-20'),
	 ('abdc123xyz',13,4,130,'2024-05-15');


-- what is the need of this table?
-- how can I handle this table effieceintly to make queries faster?