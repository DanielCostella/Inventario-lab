const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

// Obtener todos los materiales
router.get('/', materialController.getAllMaterials);
// Obtener un material por ID
router.get('/:id', materialController.getMaterialById);
// Crear un nuevo material
router.post('/', materialController.createMaterial);
// Actualizar un material
router.put('/:id', materialController.updateMaterial);
// Eliminar un material
router.delete('/:id', materialController.deleteMaterial);

module.exports = router;