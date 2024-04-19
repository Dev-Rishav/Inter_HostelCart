CREATE TABLE item (
    itemNO NUMBER,
    sellerID NUMBER,
    itemName VARCHAR2(40) CONSTRAINT itemName_not_null not null,
    itemPrice NUMBER CONSTRAINT itemPrice_not_null not null,
    itemDescription VARCHAR2(100),
    itemTags VARCHAR2(30) CONSTRAINT itemTags_not_null not null,
    listingDate DATE CONSTRAINT listingDate_not_null NOT NULL,
    reportflag NUMBER(1),
    itemVisit NUMBER,
    
    CONSTRAINT fk_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT pk_item PRIMARY KEY (itemNO)
);

drop table item;

INSERT ALL
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit)
VALUES (07,219,'TP-Link Router 2.4GHz',500,'6months old, in very good condition, white in color','Router,Electronics',TO_DATE('03/04/24','MM/DD,YY'),0,1)
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit)
VALUES (09,224,'Havells Air Cooler',6000,'6months old, in very good condition, white in color','Cooler,Electronics',TO_DATE('02/03/24','MM/DD,YY'),0,9)
SELECT * FROM dual;
SELECT * from ITEM;
desc item

INSERT ALL
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit) 
VALUES (01, 123 , 'Blue T-shirt', 200, 'A comfortable blue cotton t-shirt', 'clothing', TO_DATE('03/04/24','MM/DD/YY'), 0,5)
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit) 
VALUES (02, 216, 'Samsung Mobile', 3999, 'Brand new mobile with 128GB storage', 'electronics phone', TO_DATE('03/05/24','MM/DD/YY'), 0,3)
SELECT * FROM dual;
SELECT * FROM ITEM;

INSERT ALL
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit) 
VALUES(03, 123, 'Leather Wallet', 135, 'Brown leather wallet with multiple card slots', 'accessories', TO_DATE('04/05/24','MM/DD/YY'), 0, 7)
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit) 
VALUES(04, 216, 'Wireless Mouse', 315, 'Ergonomic design, compatible with all devices', 'electronics', TO_DATE('03/05/24','MM/DD/YY'), 0, 2)
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit) 
VALUES(05, 219, 'Floral Dress', 449, 'Elegant floral pattern dress suitable for parties', 'clothing dress',TO_DATE('06/06/24','MM/DD/YY'), 0, 10)
INTO ITEM(itemNO,sellerID,itemName,itemPrice,itemDescription,itemTags,listingDate,reportflag,itemVisit) 
VALUES(06, 224, 'Coffee Mug Set', 120, 'Set of 4 ceramic mugs with different colors', 'kitchen home', TO_DATE('07/12/24','MM/DD/YY'), 0, 2)
SELECT * FROM dual;
SELECT * FROM ITEM;