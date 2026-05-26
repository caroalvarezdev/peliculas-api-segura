const { Router } = require('express');
const Genero = require('../models/Genero');

const router = Router();

// Crear género
router.post('/', async (req, res) => {
  try {
    const genero = new Genero(req.body);
    await genero.save();
    res.status(201).json(genero);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear género', error });
  }
});

// Obtener todos
router.get('/', async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener géneros', error });
  }
});

// Actualizar género
router.put('/:id', async (req, res) => {
  try {
    const generoActualizado = await Genero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(generoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar género', error });
  }
});

// Eliminar género
router.delete('/:id', async (req, res) => {
  try {
    await Genero.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Género eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar género', error });
  }
});

module.exports = router;