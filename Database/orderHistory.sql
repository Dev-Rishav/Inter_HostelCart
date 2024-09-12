CREATE TABLE orderHistory (
    itemNO NUMBER,
    buyerId NUMBER,
    sellerID NUMBER,
    orderDate DATE CONSTRAINT orderDate_not_null NOT NULL,
    status VARCHAR2(10) CONSTRAINT status_not_null NOT NULL,

    CONSTRAINT fk_oh_seller FOREIGN KEY (sellerID) REFERENCES userTable(userID),
    CONSTRAINT fk_oh_buyer FOREIGN KEY (buyerId) REFERENCES userTable(userID),
    CONSTRAINT fk_oh_item FOREIGN KEY (itemNO) REFERENCES item(itemNO)
);

drop table orderHistory;

INSERT ALL
INTO orderHistory(buyerId,itemNO,sellerID,orderDate,status)
VALUES (219,7,203,TO_DATE('2/3/24','mm/dd/yy'),'Done')
SELECT * FROM dual;


select * from ORDERHISTORY;

BEGIN
    FOR i IN 10..30 LOOP
        INSERT INTO orderHistory (buyerId, itemNO, sellerID, orderDate, status)
        SELECT 
            216,                        -- Fixed buyerId
            i,                          -- Sequential itemNO
            219,                        -- Fixed sellerID
            TO_DATE('2/3/24', 'mm/dd/yy') + (i-1), -- Incrementing orderDate for each entry
            CASE MOD(i, 2) WHEN 0 THEN 'Done' ELSE 'Pending' END -- Alternating status
        FROM dual;
    END LOOP;
END;
/



SELECT * from ORDERHISTORY;