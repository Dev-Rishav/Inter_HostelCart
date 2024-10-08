const express = require('express');
const app = express();
const db = require('./connection'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; 

//* Middleware
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//* Routes
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


app.post('/api/items', (req, res) => {
    const { sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, itemPhotoURL } = req.body;
    console.log(req.body);
    
    if (!sellerID || !itemName || !itemPrice || !itemDescription || !itemTags || !listingDate || !itemPhotoURL) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const reportflag = 0; // Set reportflag to 0 (false) by default
    const itemVisit = 0; // Set itemVisit to 0 by default
    const sqlQuery = 'INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sqlQuery, [sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Item added successfully', itemId: result.insertId });
    });
});


app.get('/items/mens/:id', (req, res) => {
    const sqlSelect = "SELECT * FROM item WHERE gender = 'he' AND sellerID = ?";
    db.query(sqlSelect, [req.params.id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});

app.get('/items/womens/:id', (req, res) => {
    const sqlSelect = "SELECT * FROM item WHERE gender = 'she' AND sellerID = ?";
    db.query(sqlSelect, [req.params.id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        res.send(result);
    });
});



//Authentication
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;    

    const sqlSelect = "SELECT * FROM userTable WHERE emailID = ?";
    db.query(sqlSelect, [email], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = result[0];
        // console.log(user);
        // return res.json(user);
        
        bcrypt.compare(password, user.userPassword, (err, isMatch) => {
            console.log(isMatch);
            
            
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const token = jwt.sign({ userId: user.userID }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        });
    });
});

//! All these are dummy queries for project presentation purpose
//? I have to populate the required queries according to the frontend requirements and later move to MVC architecture

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