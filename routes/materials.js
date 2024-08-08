const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

// Obtener todos los materiales
router.get('/api/materials', async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los materiales' });
  }
});

// Agregar o actualizar el stock de un material
router.post('/', async (req, res) => {
  const { nombre, stock, id, fecha } = req.body;
  
  try {
    const material = await Material.findOne({ where: { nombre } });
    
    if (material) {
      material.stock += stock; // Puede ser positivo o negativo
      if (material.stock < 0) {
        return res.status(400).json({ error: 'El stock no puede ser negativo' });
      }
      await material.save();
      res.json({ message: 'Stock actualizado', material });
    } else {
      res.status(400).json({ error: 'El material no existe en la base de datos' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar o actualizar el material' });
  }
});

// Eliminar un material por nombre
router.delete('/:nombre', async (req, res) => {
  const { nombre } = req.params;

  try {
    const material = await Material.findOne({ where: { nombre } });
    if (material) {
      await material.destroy();
      res.json({ message: 'Material eliminado' });
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el material' });
  }
});

module.exports = router;