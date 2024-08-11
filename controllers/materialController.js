const Material = require('../models/Material');

exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los materiales' });
  }
};

exports.getMaterialById = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await Material.findByPk(id);
    if (material) {
      res.status(200).json(material);
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el material' });
  }
};

exports.createMaterial = async (req, res) => {
  const { nombre, descripcion, stock } = req.body;
  try {
    const material = await Material.create({ nombre, descripcion, stock });
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el material' });
  }
};

exports.updateMaterial = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, stock } = req.body;
  try {
    const material = await Material.findByPk(id);
    if (material) {
      material.nombre = nombre;
      material.descripcion = descripcion;
      material.stock = stock;
      await material.save();
      res.status(200).json(material);
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el material' });
  }
};

exports.deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await Material.findByPk(id);
    if (material) {
      await material.destroy();
      res.status(200).json({ message: 'Material eliminado' });
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el material' });
  }
};