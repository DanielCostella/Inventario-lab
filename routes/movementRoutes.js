const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movementController');

router.post('/', movementController.createMovement);
router.get('/', movementController.getMovements);

module.exports = router;