const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const authenticateToken = require('../middleware/authenticateToken');

// Definir las rutas para materiales
router.get('/', authenticateToken, materialController.getAllMaterials);
router.get('/:id', authenticateToken, materialController.getMaterialById);
router.post('/', authenticateToken, materialController.createMaterial);
router.put('/:id', authenticateToken, materialController.updateMaterial);
router.delete('/:id', authenticateToken, materialController.deleteMaterial);

// Ruta para actualizar el stock de un material
router.put('/:id/update-stock', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const userEmail = req.user.email; // Asumiendo que el middleware de autenticación proporciona esta información

    const material = await materialController.updateMaterial(req, res);

    if (material) {
      console.log('Material actualizado:', material);
      res.json({ success: true, material });
    }
  } catch (error) {
    console.error('Error al actualizar el stock del material:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el stock del material' });
  }
});

module.exports = router;