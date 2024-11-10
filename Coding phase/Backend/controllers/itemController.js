const Item = require('../models/itemModel');

const itemController = {
  getAllItems: (req, res) => {
    Item.getAll((err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: err.message });
      }
      res.send(result);
    });
  },

  createItem: (req, res) => {
    const {
      sellerID,
      itemName,
      itemPrice,
      itemDescription,
      itemTags,
      listingDate,
      itemPhotoURL
    } = req.body;

    if (!sellerID || !itemName || !itemPrice || !itemDescription || !itemTags || !listingDate || !itemPhotoURL) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const reportflag = 0;
    const itemVisit = 0;
    const itemData = [sellerID, itemName, itemPrice, itemDescription, itemTags, listingDate, reportflag, itemVisit, itemPhotoURL];

    Item.create(itemData, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Item added successfully', itemId: result.insertId });
    });
  },

  getItemsByGenderAndSeller: (req, res) => {
    const { gender, id } = req.params;
    Item.getByGenderAndSeller(gender, id, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: err.message });
      }
      res.send(result);
    });
  },
  getItemsByTag:(req,res)=>{
    
    const tag=req.params;
    Item.getByTag(tag, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: err.message });
      }
      
      
      
      res.send(result);
    });
  },
  getItemById:(req,res)=>{
      const id=req.params;
      // console.log("yes",id);
      
       Item.getById(id.id,(err,result)=>{
        if(err){
          console.error('Error executing query:', err);
          return res.status(500).json({ error: err.message });
        }
        res.send(result);
      })
  }
};

module.exports = itemController;