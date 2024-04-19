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


-- Introducing PL/SQL to generate entries
DECLARE
    v_sellerID NUMBER;
BEGIN
    FOR i IN 10..40 LOOP
        v_sellerID := TRUNC(DBMS_RANDOM.VALUE(1, 30)); -- Random sellerID between 1 and 30

        INSERT INTO item (itemNO, sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit)
        VALUES (
            i, -- Sequential itemNO
            v_sellerID, -- Random sellerID
            'Item' || i, -- Unique itemName
            ROUND(DBMS_RANDOM.VALUE(10, 1000), 2), -- Random itemPrice between 10 and 1000
            'Description for item ' || i, -- Description
            'Tag' || i, -- Unique itemTags
            SYSDATE - TRUNC(DBMS_RANDOM.VALUE(1, 365)), -- Random listingDate within the last year
            CASE WHEN MOD(i, 2) = 0 THEN 1 ELSE 0 END, -- Alternating reportflag
            TRUNC(DBMS_RANDOM.VALUE(0, 1000)) -- Random itemVisit
        );
    END LOOP;
    COMMIT;
END;
/


SELECT * from ITEM;