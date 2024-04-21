SELECT * FROM userTable WHERE USERID IN 
(SELECT SELLERID FROM Item WHERE ITEMPRICE > 500);

SELECT * FROM Item WHERE SELLERID IN 
(SELECT USERID FROM userTable WHERE USERNAME LIKE 'R%');

SELECT * FROM transaction WHERE soldDate BETWEEN '01/02/24' AND '28/02/24';

SELECT * FROM Item WHERE itemNO IN 
(SELECT itemNO FROM soldHistory WHERE sellerId = 219);

SELECT * FROM Item WHERE itemNO IN 
(SELECT itemNO FROM orderHistory GROUP BY itemNO HAVING COUNT(*) >2);  --not working

SELECT COUNT(tranID)
FROM transaction
WHERE soldDate BETWEEN TO_DATE('01/01/2024', 'dd/mm/yyyy') AND TO_DATE('10/09/2024', 'dd/mm/yyyy');


SELECT * FROM chatService WHERE messageId = 2;



SELECT i.ItemName, i.description, s.SellerName
FROM Wishlist w
JOIN Item i ON w.itemID = i.itemID
JOIN Seller s ON i.sellerID = s.sellerID
WHERE w.buyerID = 224;          --not working



SELECT i.ItemName, i.description, s.USERNAME
FROM Wishlist w
JOIN Item i ON w.itemNO = i.itemNO
JOIN userTable s ON i.sellerID = s.userID
WHERE w.buyerID = 219;   --not working

SELECT i.ITEMNAME, i.ITEMDESCRIPTION, s.USERNAME
FROM WishList w
JOIN Item i ON w.itemNO = i.itemNO
JOIN userTable s ON i.SELLERID = s.USERID
WHERE w.BUYERID = 219;


SELECT t.TransactionID, i.ItemName, s.USERNAME
FROM orderHistory t
JOIN Item i ON t.itemNO = i.itemNO
JOIN userTable s ON t.SellerID = s.userID
WHERE t.BuyerID = 219;


SELECT * FROM chatService
WHERE ReceiverID > 1
ORDER BY messageTime;


SELECT sellerId, itemNo, COUNT(*) AS soldcount
FROM soldHistory
GROUP BY sellerId, itemNo
HAVING COUNT(*) > 0;


SELECT buyerId
FROM transaction
WHERE soldPrice = (select MAX(soldPrice) from soldHistory);

SELECT * FROM chatService
WHERE (SenderID = 219 AND ReceiverID = 203)
   OR (SenderID = 216 AND ReceiverID = 219)
ORDER BY messageTime DESC
FETCH FIRST 1 ROW ONLY;


SELECT  i.ITEMNAME, s.USERName, o.ORDERDATE, o.STATUS
FROM ORDERHISTORY o
JOIN Item i ON o.ITEMNO = i.ITEMNO
JOIN userTable s ON o.SELLERID = s.userID
WHERE o.BUYERID = 216;

