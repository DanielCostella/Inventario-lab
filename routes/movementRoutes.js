const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movementController');
const authenticateToken = require('../middleware/authenticateToken');


// Crear un nuevo movimiento (requiere autenticación)
router.post('/', authenticateToken, movementController.createMovement);

// Obtener todos los movimientos (requiere autenticación)
router.get('/', authenticateToken, movementController.getMovements);

module.exports = router;