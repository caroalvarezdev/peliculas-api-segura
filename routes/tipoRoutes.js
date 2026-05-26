const { Router } = require('express');
const Tipo = require('../models/Tipo');

const router = Router();

// Crear
router.post('/', async (req, res) => {
  try {
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.status(201).json(tipo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear tipo', error });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener tipos', error });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar tipo', error });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    await Tipo.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Tipo eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar tipo', error });
  }
});

module.exports = router;