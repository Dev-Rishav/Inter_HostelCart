CREATE table orderHistory(
    buyerId NUMBER,
    itemNO NUMBER,
    sellerID NUMBER,
    orderDate DATE CONSTRAINT orderDate_not_null not null,
    status VARCHAR2(10) CONSTRAINT status_not_null not null,

    CONSTRAINT fk_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT fk_seller FOREIGN KEY (buyerID) REFERENCES userTable(userID),
    CONSTRAINT fk_seller FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

INSERT ALL
INTO orderHistory(buyerId,itemNO,sellerID,orderDate,status)
VALUES (219,7,203,TO_DATE('2/3/24','mm/dd,yy'),'Done')
SELECT * FROM dual;

SELECT * from TAB;
SELECT * from USERTABLE;