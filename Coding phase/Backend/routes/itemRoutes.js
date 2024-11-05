const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.get('/:gender/:id', itemController.getItemsByGenderAndSeller);

module.exports = router;