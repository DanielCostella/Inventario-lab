const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

// Definir las rutas para materiales
router.get('/', materialController.getAllMaterials);
router.get('/:id', materialController.getMaterialById);
router.post('/', materialController.createMaterial);
router.put('/:id', materialController.updateMaterial);
router.delete('/:id', materialController.deleteMaterial);

module.exports = router;