create table transaction(
      tranid NUMBER,
      itemno NUMBER,
      sellerid NUMBER,
      buyerid NUMBER,
      soldprice NUMBER  CONSTRAINT soldPrice_trans_not_null not null,
      solddate DATE  CONSTRAINT soldDate_trans_not_null not null,
      itemStatus NUMBER(1) not null,

      CONSTRAINT pk_trans_tran PRIMARY KEY (tranId),
      CONSTRAINT fk_trans_item FOREIGN KEY (itemno) REFERENCES item(itemNO),
      CONSTRAINT fk_trans_seller FOREIGN KEY (sellerid) REFERENCES userTable(userID),
      CONSTRAINT fk_trans_buyer FOREIGN KEY (buyerid) REFERENCES userTable(userID)
);
DROP TABLE transaction;


insert ALL
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(1,3,203,219,400,TO_DATE('03/04/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(2,4,123,203,1000,TO_DATE('17/02/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(3,5,219,203,100,TO_DATE('17/04/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(4,6,219,203,500,TO_DATE('10/05/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(5,7,216,224,450,TO_DATE('23/04/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(6,8,123,216,600,TO_DATE('04/03/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(7,9,216,203,1100,TO_DATE('7/02/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(8,10,219,224,300,TO_DATE('14/02/24','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(9,11,224,203,450,TO_DATE('28/11/23','DD/MM,YY'),1)
INTO transaction( tranid,itemno,sellerid,buyerid,soldprice,solddate,itemstatus)
VALUES(10,13,203,216,640,TO_DATE('17/05/23','DD/MM,YY'),1)
SELECT * FROM dual;

SELECT *from transaction;


select * from item;