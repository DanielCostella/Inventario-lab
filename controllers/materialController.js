const Material = require('../models/Material');

exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll({
      attributes: ['id', 'nombre', 'descripcion', 'stock', 'updatedAt', 'updatedBy']
    }); 
    res.json(materials);
  } catch (error) {
    console.error('Error al obtener los materiales:', error);
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
  const userEmail = req.user.email; // Asegúrate de que esto esté disponible a través de tu middleware de autenticación
  try {
    const material = await Material.create({ 
      nombre, 
      descripcion, 
      stock, 
      updatedBy: userEmail 
    });
    res.status(201).json(material);
  } catch (error) {
    console.error('Error al crear el material:', error);
    res.status(500).json({ error: 'Error al crear el material' });
  }
};


exports.updateMaterial = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const userEmail = req.user ? req.user.email : 'Usuario desconocido';

  console.log('Recibida solicitud de actualización:', { id, quantity, userEmail }); // Log para depuración

  try {
    const material = await Material.findByPk(id);
    if (material) {
      material.stock += parseInt(quantity);
      material.updatedBy = userEmail;
      material.lastUpdated = new Date();
      await material.save();

      console.log('Material actualizado:', material.toJSON()); // Log para depuración

      res.status(200).json(material);
    } else {
      res.status(404).json({ error: 'Material no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el material:', error);
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
    console.error('Error al eliminar el material:', error);
    res.status(500).json({ error: 'Error al eliminar el material' });
  }
};


