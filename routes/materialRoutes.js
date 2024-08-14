const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const Material = require('../models/Material');

// Definir las rutas para materiales
router.get('/', materialController.getAllMaterials);
router.get('/:id', materialController.getMaterialById);
router.post('/', materialController.createMaterial);
router.put('/:id', materialController.updateMaterial);
router.delete('/:id', materialController.deleteMaterial);

// Ruta para actualizar el stock de un material
router.post('/update', async (req, res) => {
  try {
    const { materialId, quantity } = req.body;
    const material = await Material.findByPk(materialId);

    if (!material) {
      return res.status(404).json({ error: 'Material no encontrado' });
    }

    material.stock += quantity;
    material.lastUpdated = new Date(); // Actualiza la fecha de última modificación
    await material.save();

    res.json({ success: true, material });
  } catch (error) {
    console.error('Error al actualizar el material:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el material' });
  }
});

module.exports = router;