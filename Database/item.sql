CREATE TABLE item (
    itemNO NUMBER,
    sellerID NUMBER,
    itemName VARCHAR2(30) CONSTRAINT itemName_not_null not null,
    itemPrice NUMBER CONSTRAINT itemPrice_not_null not null,
    itemDescription VARCHAR2(100),
    itemTags VARCHAR2(20) CONSTRAINT itemTags_not_null not null,
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


desc item

-- delete from item where SELLERID in (select userID from userTable where userID=219);
-- ROLLBACK;
SELECT * from ITEM;

INSERT ALL
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1001, 123, 'Smartphone', 5000, 'Brand new smartphone with latest features', 'Electronics',TO_DATE( '03/04/2003', 'MM/DD,YY'), 0, 105)
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1002, 219, 'Laptop', 10990, 'High-performance laptop for professional use', 'Electronics',TO_DATE( '05/08/2019', 'MM/DD,YY'), 0, 92)
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1003, 216, 'Headphones', 1049, 'Noise-cancelling headphones for immersive sound', 'Electronics', TO_DATE( '03/07/2001', 'MM/DD,YY'),0,78)
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1004, 224, 'SmartWatch', 1500, 'Stylish smartwatch with health tracking', 'Electronics',TO_DATE( '03/12/2023', 'MM/DD,YY'), 0, 15)
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1005, 123, 'Camera', 1600, 'DSLR camera with 4K recording capabilities', 'Electronics',TO_DATE( '12/12/2023', 'MM/DD,YY'), 0, 75)
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1006, 216, 'Gaming Console', 800, 'Next-gen gaming console for immersive gaming', 'Electronics',TO_DATE( '02/02/2024', 'MM/DD,YY'), 0, 11)
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1007, 219, 'Tablet', 800, 'Lightweight tablet for onyhe-go productivity', 'Electronics',TO_DATE( '01/03/2024', 'MM/DD,YY'), 0, 25)
INTO item (itemNo,selleRId,itemName,itemPrice, itemDescription, itemTags, listingDate,reportFlag, itemVisit) 
VALUES 
(1008, 216, 'Fitness Tracker', 200, 'Track your fitness goals with this smart brand', 'Electronics',TO_DATE( '03/02/2024', 'MM/DD,YY'), 0, 19)

SELECT * FROM dual;

