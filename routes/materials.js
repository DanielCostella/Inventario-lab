// backend/routes/materials.js
const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

router.post('/materials', async (req, res) => {
  try {
    const { nombre, descripcion, stock, id, fecha } = req.body;
    const newMaterial = new Material({
      nombre,
      descripcion,
      stock,
      userId: id,
      fecha,
    });
    await newMaterial.save();
    res.status(201).send(newMaterial);
  } catch (error) {
    res.status(400).send({ error: 'Error al agregar material' });
  }

  // Eliminar un material por ID
router.delete('/:id', async (req, res) => {
    try {
      const material = await Material.findByIdAndDelete(req.params.id);
      if (!material) {
        return res.status(404).send('Material no encontrado');
      }
      res.send('Material eliminado correctamente');
    } catch (error) {
      res.status(500).send(error);
    }
  });

});

module.exports = router;