const Material = require('../models/Material');

exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los materiales' });
  }
};

exports.getMaterialById = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (material) {
      res.json(material);
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el material' });
  }
};

exports.createMaterial = async (req, res) => {
  try {
    const newMaterial = await Material.create(req.body);
    res.status(201).json(newMaterial);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el material' });
  }
};

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
    res.status(500).json({ error: 'Error al actualizar el material' });
  }
};

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
    res.status(500).json({ error: 'Error al eliminar el material' });
  }
};