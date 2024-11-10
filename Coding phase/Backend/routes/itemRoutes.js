const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.get('/:gender/:id', itemController.getItemsByGenderAndSeller);
router.get('/:tag',itemController.getItemsByTag);
router.get('/great/atul/:id',itemController.getItemById);
router.post('/report',authenticateToken ,itemController.reportItem);
router.put('/report/item/atul/:id', itemController.removeItem);

module.exports = router;