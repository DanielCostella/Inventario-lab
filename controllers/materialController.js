const Material = require('../models/Material');

// Controlador para obtener todos los materiales
exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un material por ID
exports.getMaterialById = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (material) {
      res.json(material);
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para crear un nuevo material
exports.createMaterial = async (req, res) => {
  try {
    const material = await Material.create(req.body);
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un material
exports.updateMaterial = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (material) {
      await material.update(req.body);
      res.json(material);
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un material
exports.deleteMaterial = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (material) {
      await material.destroy();
      res.json({ message: 'Material eliminado' });
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};