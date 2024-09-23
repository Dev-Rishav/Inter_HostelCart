const express = require('express');
const app = express();
const db = require('./connection'); 

app.get('/', (req, res) => {
    res.send("From backend");
});

app.get('/items', (req, res) => {
    const sqlSelect = "SELECT * FROM item";
    db.query(sqlSelect, (err, result) => {  
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

app.get('/products', (req, res) => {
    const sqlSelect = "SELECT * FROM item";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 1: SELECT * FROM userTable WHERE USERID IN (SELECT SELLERID FROM item WHERE ITEMPRICE > 500);
app.get('/users/high-priced-items', (req, res) => {
    const sqlQuery = "SELECT * FROM userTable WHERE USERID IN (SELECT SELLERID FROM item WHERE ITEMPRICE > 500)";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 2: SELECT * FROM item WHERE SELLERID IN (SELECT USERID FROM userTable WHERE USERNAME LIKE 'R%');
app.get('/items/sellers-starting-with-r', (req, res) => {
    const sqlQuery = "SELECT * FROM item WHERE SELLERID IN (SELECT USERID FROM userTable WHERE USERNAME LIKE 'R%')";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 3: SELECT * FROM transaction WHERE soldDate BETWEEN '01/02/24' AND '28/02/24';
app.get('/transactions/february-2017', (req, res) => {
    const sqlQuery = "SELECT * FROM transaction WHERE soldDate BETWEEN '2016-02-01' AND '2018-02-28'";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 4: SELECT * FROM item WHERE itemNO IN (SELECT itemNO FROM soldHistory WHERE sellerId = 219);
app.get('/items/sold-by-seller-219', (req, res) => {
    const sqlQuery = "SELECT * FROM item WHERE itemNO IN (SELECT itemNO FROM soldHistory WHERE sellerId = 219)";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 5: SELECT * FROM item WHERE itemNO IN (SELECT itemNO FROM orderHistory GROUP BY itemNO HAVING COUNT(*) > 2);
app.get('/items/ordered-more-than-twice', (req, res) => {
    const sqlQuery = "SELECT * FROM item WHERE itemNO IN (SELECT itemNO FROM orderHistory GROUP BY itemNO HAVING COUNT(*) > 2)";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 6: SELECT COUNT(tranID) FROM transaction WHERE soldDate BETWEEN TO_DATE('01/01/2024', 'dd/mm/yyyy') AND TO_DATE('10/09/2024', 'dd/mm/yyyy');
app.get('/transactions/count-2024', (req, res) => {
    const sqlQuery = "SELECT COUNT(tranID) AS transactionCount FROM transaction WHERE soldDate BETWEEN '2024-01-01' AND '2024-09-10'";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 7: SELECT * FROM chatService WHERE messageId = 2;
app.get('/chat/message-2', (req, res) => {
    const sqlQuery = "SELECT * FROM chatService WHERE messageId = 2";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 8: SELECT i.itemName, i.description, s.SellerName FROM Wishlist w JOIN item i ON w.itemID = i.itemID JOIN Seller s ON i.sellerID = s.sellerID WHERE w.buyerID = 224;
app.get('/wishlist/buyer-224', (req, res) => {
    const sqlQuery = `
        SELECT i.itemName, i.description, s.SellerName
        FROM Wishlist w
        JOIN item i ON w.itemID = i.itemID
        JOIN Seller s ON i.sellerID = s.sellerID
        WHERE w.buyerID = 224
    `;
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 9: SELECT i.itemName, i.description, s.USERNAME FROM Wishlist w JOIN item i ON w.itemNO = i.itemNO JOIN userTable s ON i.sellerID = s.userID WHERE w.buyerID = 219;
app.get('/wishlist/buyer-219', (req, res) => {
    const sqlQuery = `
        SELECT i.itemName, i.description, s.USERNAME
        FROM Wishlist w
        JOIN item i ON w.itemNO = i.itemNO
        JOIN userTable s ON i.sellerID = s.userID
        WHERE w.buyerID = 219
    `;
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 10: SELECT i.ITEMNAME, i.ITEMDESCRIPTION, s.USERNAME FROM WishList w JOIN item i ON w.itemNO = i.itemNO JOIN userTable s ON i.SELLERID = s.USERID WHERE w.BUYERID = 219;
app.get('/wishlist/buyer-219-details', (req, res) => {
    const sqlQuery = `
        SELECT i.ITEMNAME, i.ITEMDESCRIPTION, s.USERNAME
        FROM WishList w
        JOIN item i ON w.itemNO = i.itemNO
        JOIN userTable s ON i.SELLERID = s.USERID
        WHERE w.BUYERID = 219
    `;
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 11: SELECT t.TransactionID, i.ItemName, s.USERNAME FROM orderHistory t JOIN item i ON t.itemNO = i.itemNO JOIN userTable s ON t.SellerID = s.userID WHERE t.BuyerID = 219;
app.get('/order-history/buyer-219', (req, res) => {
    const sqlQuery = `
        SELECT t.TransactionID, i.ItemName, s.USERNAME
        FROM orderHistory t
        JOIN item i ON t.itemNO = i.itemNO
        JOIN userTable s ON t.SellerID = s.userID
        WHERE t.BuyerID = 219
    `;
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 12: SELECT * FROM chatService WHERE ReceiverID > 1 ORDER BY messageTime;
app.get('/chat/receiver-id-greater-than-1', (req, res) => {
    const sqlQuery = "SELECT * FROM chatService WHERE ReceiverID > 1 ORDER BY messageTime";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 13: SELECT sellerId, itemNo, COUNT(*) AS soldcount FROM soldHistory GROUP BY sellerId, itemNo HAVING COUNT(*) > 0;
app.get('/sold-history/sold-count', (req, res) => {
    const sqlQuery = "SELECT sellerId, itemNo, COUNT(*) AS soldcount FROM soldHistory GROUP BY sellerId, itemNo HAVING COUNT(*) > 0";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 14: SELECT buyerId FROM transaction WHERE soldPrice = (select MAX(soldPrice) from soldHistory);
app.get('/transaction/highest-sold-price', (req, res) => {
    const sqlQuery = "SELECT buyerId FROM transaction WHERE soldPrice = (SELECT MAX(soldPrice) FROM soldHistory)";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 15: SELECT * FROM chatService WHERE (SenderID = 219 AND ReceiverID = 203) OR (SenderID = 216 AND ReceiverID = 219) ORDER BY messageTime DESC FETCH FIRST 1 ROW ONLY;
app.get('/chat/latest-message', (req, res) => {
    const sqlQuery = `
        SELECT * FROM chatService
        WHERE (SenderID = 219 AND ReceiverID = 203)
           OR (SenderID = 216 AND ReceiverID = 219)
        ORDER BY messageTime DESC
        LIMIT 1
    `;
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

// Route 16: SELECT i.ITEMNAME, s.USERName, o.ORDERDATE, o.STATUS FROM ORDERHISTORY o JOIN item i ON o.ITEMNO = i.ITEMNO JOIN userTable s ON o.SELLERID = s.userID WHERE o.BUYERID = 2;
app.get('/order-history/buyer-2', (req, res) => {
    const sqlQuery = `
        SELECT i.ITEMNAME, s.USERName, o.ORDERDATE, o.STATUS
        FROM ORDERHISTORY o
        JOIN item i ON o.ITEMNO = i.ITEMNO
        JOIN userTable s ON o.SELLERID = s.userID
        WHERE o.BUYERID = 2
    `;
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});