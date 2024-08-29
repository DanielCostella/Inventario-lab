const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');

// Ruta para obtener el usuario actual (requiere autenticación)
router.get('/current', authenticateToken, userController.getCurrentUser);

// Ruta para obtener todos los usuarios (generalmente requiere autenticación y posiblemente permisos de administrador)
router.get('/', authenticateToken, userController.getAllUsers);

// Ruta para crear un nuevo usuario (puede no requerir autenticación si es para registro)
router.post('/', userController.createUser);

// Ruta para eliminar un usuario (generalmente requiere autenticación y permisos de administrador)
router.delete('/:id', authenticateToken, userController.deleteUser);

module.exports = router;