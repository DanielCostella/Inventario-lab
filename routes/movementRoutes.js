const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movementController');

router.post('/movements', movementController.createMovement);
router.get('/movements', movementController.getMovements);

module.exports = router;