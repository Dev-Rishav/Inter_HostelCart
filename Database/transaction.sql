	
	CREATE TABLE transaction (
    tranid SERIAL,
    itemno INT,
    sellerid INT,
    buyerid INT,
    soldprice INT NOT NULL,
    solddate DATE NOT NULL,
    itemStatus BOOLEAN NOT NULL,

    PRIMARY KEY (tranid),
    FOREIGN KEY (itemno) REFERENCES item(itemNO),
    FOREIGN KEY (sellerid) REFERENCES userTable(userID),
    FOREIGN KEY (buyerid) REFERENCES userTable(userID)
);

INSERT INTO transaction (itemno, sellerid, buyerid, soldprice, solddate, itemstatus) VALUES
(20, 1, 2, 400, TO_DATE('24/03/04', 'DD/MM/YY'), TRUE),
(11, 3, 4, 1000, TO_DATE('24/02/17', 'DD/MM/YY'), TRUE),
(12, 7, 8, 100, TO_DATE('24/04/17', 'DD/MM/YY'), TRUE),
(13, 9, 10, 200, TO_DATE('24/05/17', 'DD/MM/YY'), TRUE),
(14, 10, 2, 300, TO_DATE('24/06/17', 'DD/MM/YY'), TRUE),
(15, 1, 3, 150, TO_DATE('24/07/17', 'DD/MM/YY'), TRUE),
(16, 2, 4, 250, TO_DATE('24/08/17', 'DD/MM/YY'), TRUE),
(17, 7, 9, 350, TO_DATE('24/09/17', 'DD/MM/YY'), TRUE),
(18, 8, 10, 450, TO_DATE('24/10/17', 'DD/MM/YY'), TRUE),
(19, 9, 1, 550, TO_DATE('24/11/17', 'DD/MM/YY'), TRUE),
(20, 2, 3, 650, TO_DATE('24/12/17', 'DD/MM/YY'), TRUE);