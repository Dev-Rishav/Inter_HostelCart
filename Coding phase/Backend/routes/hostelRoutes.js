const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/:hostel', itemController.getItemsByHostel);


module.exports = router;