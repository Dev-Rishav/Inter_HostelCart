SELECT * FROM userTable WHERE USERID IN 
(SELECT SELLERID FROM item WHERE ITEMPRICE > 500);

SELECT * FROM item WHERE SELLERID IN 
(SELECT USERID FROM userTable WHERE USERNAME LIKE 'R%');

SELECT * FROM transaction WHERE soldDate BETWEEN '01/02/24' AND '28/02/24';

SELECT * FROM item WHERE itemNO IN 
(SELECT itemNO FROM soldHistory WHERE sellerId = 2);

SELECT * FROM item WHERE itemNO IN 
(SELECT itemNO FROM orderHistory GROUP BY itemNO HAVING COUNT(*) >0);  --not working

SELECT * FROM transaction WHERE soldDate BETWEEN '2016-02-01' AND '2018-02-28';


SELECT * FROM chatService WHERE messageId = 2;



       



SELECT i.itemName, i.itemDescription, s.USERNAME
FROM wishList w
JOIN item i ON w.itemNO = i.itemNO
JOIN userTable s ON i.sellerID = s.userID
WHERE w.buyerID = 3;  

SELECT i.ITEMNAME, i.ITEMDESCRIPTION, s.USERNAME
FROM wishList w
JOIN item i ON w.itemNO = i.itemNO
JOIN userTable s ON i.SELLERID = s.USERID
WHERE w.BUYERID = 3;





SELECT * FROM chatService
WHERE ReceiverID > 1
ORDER BY messageTime;


SELECT sellerId, itemNo, COUNT(*) AS soldcount
FROM soldHistory
GROUP BY sellerId, itemNo
HAVING COUNT(*) > 0;



SELECT  i.ITEMNAME, s.USERName, o.ORDERDATE, o.STATUS
FROM orderHistory o
JOIN item i ON o.ITEMNO = i.ITEMNO
JOIN userTable s ON o.SELLERID = s.userID
WHERE o.BUYERID = 3;


SELECT * FROM userTable WHERE USERID IN 
(SELECT SELLERID FROM item WHERE ITEMPRICE > 500);


SELECT sellerID, COUNT(*) AS itemCount
FROM soldHistory
GROUP BY sellerID
HAVING COUNT(*) > 0;

SELECT * FROM item WHERE itemTags LIKE '%Electronics%' OR itemTags LIKE '%Clothing%';

SELECT DISTINCT buyerID
FROM transaction
WHERE itemNO IN (SELECT itemNO FROM item WHERE sellerID = 1);
