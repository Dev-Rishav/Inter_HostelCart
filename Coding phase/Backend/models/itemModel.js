const pool = require('../config/db');

const Item = {
  getAll: (callback) => {
    const sqlSelect = "SELECT * FROM item";
    pool.query(sqlSelect, callback);
  },
  create: (itemData, callback) => {
    const sqlInsert = "INSERT INTO item (sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
    pool.query(sqlInsert, itemData, callback);
  },
  getByGenderAndSeller: (gender, sellerID, callback) => {
    const sqlSelect = "SELECT * FROM item WHERE gender = $1 AND sellerID = $2";
    pool.query(sqlSelect, [gender, sellerID], callback);
  },
  getByTag:(tag,callback)=>{
    const sqlGet="SELECT * FROM item WHERE LOWER(item.itemtags) =$1  ";  //OR gender='he'
    
    
    pool.query(sqlGet,[tag.tag],callback);
  
    
  },
  getById:(id,callback)=>{
    const query = `
  SELECT 
    item.*, 
    usertable.username, 
    usertable.hostelno, 
    usertable.roomno, 
    usertable.userdept, 
    usertable.usercourse 
  FROM item 
  JOIN usertable ON item.sellerid = usertable.userid 
  WHERE item.itemno = $1`;
    
    pool.query(query,[id],callback);
  },
  reportItem: (itemId, callback) => {
    const sqlSelect = "SELECT reportflag FROM item WHERE itemno = $1";
    pool.query(sqlSelect, [itemId], (err, result) => {
      if (err) {
        return callback(err);
      }
      
      if (result.rows.length > 0 && result.rows[0].reportflag) {
        // console.log("result",result.rows[0].reportflag);
        return callback(null, { message: 'Item has already been reported' });
      } else {
        const sqlUpdate = "UPDATE item SET reportflag = true WHERE itemno = $1";
        pool.query(sqlUpdate, [itemId], (err, result) => {
          if (err) {
            return callback(err);
          }
          return callback(null, { message: 'Item reported successfully' });
          
        });
      }
    });
  },
  removeById:(id,callback)=>{

    const query="DELETE FROM item  WHERE itemno = $1 ";
    pool.query(query,[id],callback);
  }
};

module.exports = Item;