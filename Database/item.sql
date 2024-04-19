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