const { Router } = require('express');
const Media = require('../models/Media');

const router = Router();

// Crear media
router.post('/', async (req, res) => {
  try {
    const media = new Media(req.body);
    await media.save();
    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear media', error });
  }
});

// Obtener todas (con populate)
router.get('/', async (req, res) => {
  try {
    const medias = await Media.find()
      .populate('genero')
      .populate('director')
      .populate('productora')
      .populate('tipo');

    res.json(medias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener medias', error });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(media);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar media', error });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    await Media.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Media eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar media', error });
  }
});

module.exports = router;
