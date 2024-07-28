const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definir las rutas para usuarios
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;