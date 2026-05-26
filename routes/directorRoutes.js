const { Router } = require('express');
const Director = require('../models/Director');
const verifyToken = require('../middlewares/verifyToken');

const router = Router();

// Crear
router.post('/', verifyToken, async (req, res) => {
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
router.put('/:id', verifyToken, async (req, res) => {
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
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Director.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Director eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar director', error });
  }
});

module.exports = router;