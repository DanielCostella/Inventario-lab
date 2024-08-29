const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registro
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Encriptar la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ id: newUser.id, username: newUser.username });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }
    const token = jwt.sign(
      { id: user.id, email: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({
      token,
      user: {
        id: user.id,
        email: user.username
      }
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;