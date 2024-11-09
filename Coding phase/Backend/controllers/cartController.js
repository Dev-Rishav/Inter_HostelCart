const Cart = require('../models/cartModel');
const { get } = require('../routes/cartRoutes');

const cartController = {
  addItemToCart: (req, res) => {
    
    const userId = req.user.userId;
    const { itemId, quantity } = req.body;

    Cart.addItem(userId, itemId, (err, result) => {
      if (err) {
        console.error('Error adding item to cart:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(201).json({ message: 'Item added to cart successfully' });
    });
  },
  getCartItems: (req, res) => {
    const userId = req.user.userId;

    Cart.findByUserId(userId, (err, result) => {
      if (err) {
        console.error('Error fetching cart items:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json(result.rows);
    });
  },
};

module.exports = cartController;