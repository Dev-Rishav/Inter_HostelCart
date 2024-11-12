const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/:room', chatController.getMessages);
router.post('/', chatController.saveMessage);

module.exports = router;