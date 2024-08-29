const Movement = require('../models/Movement');
const MaterialMovement = require('../models/MaterialMovement');
const Material = require('../models/Material');

// Crear un nuevo movimiento
const createMovement = async (req, res) => {
  const { materialId, type, quantity } = req.body;

  try {
    const material = await Material.findByPk(materialId);
    if (!material) {
      return res.status(404).json({ error: 'Material no encontrado' });
    }

    const movement = await Movement.create({ type });
    await MaterialMovement.create({
      material_id: materialId,
      movement_id: movement.id,
      quantity
    });

    if (type === 'salida') {
      material.stock -= quantity;
    } else {
      material.stock += quantity;
    }
    await material.save();

    res.status(201).json({ message: 'Movimiento registrado con éxito' });
  } catch (error) {
    console.error('Error al crear movimiento:', error);
    res.status(500).json({ error: 'Error al crear movimiento' });
  }
};

// Obtener todos los movimientos
const getMovements = async (req, res) => {
  try {
    const movements = await MaterialMovement.findAll({
      include: [Material, Movement]
    });
    res.json(movements);
  } catch (error) {
    console.error('Error al obtener movimientos:', error);
    res.status(500).json({ error: 'Error al obtener movimientos' });
  }
};

// Asegúrate de exportar todas las funciones necesarias
module.exports = {
  createMovement,
  getMovements
};