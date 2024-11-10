const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', authenticateToken, orderController.createOrder);
router.get('/', authenticateToken, orderController.getUserOrders);
router.get('/:id', authenticateToken, orderController.getOrderById);

module.exports = router;