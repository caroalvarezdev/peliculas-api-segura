const { Router } = require('express');
const Productora = require('../models/Productora');

const router = Router();

// Crear
router.post('/', async (req, res) => {
  try {
    const productora = new Productora(req.body);
    await productora.save();
    res.status(201).json(productora);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear productora', error });
  }
});

// Obtener todas
router.get('/', async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productoras', error });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const productora = await Productora.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(productora);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar productora', error });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    await Productora.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Productora eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar productora', error });
  }
});

module.exports = router;
