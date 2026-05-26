const { Router } = require('express');
const Director = require('../models/Director');

const router = Router();

// Crear
router.post('/', async (req, res) => {
  try {
    const director = new Director(req.body);
    await director.save();
    res.status(201).json(director);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear director', error });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener directores', error });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(director);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar director', error });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    await Director.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Director eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar director', error });
  }
});

module.exports = router;