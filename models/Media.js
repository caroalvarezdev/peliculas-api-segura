const { Schema, model } = require('mongoose');

const MediaSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  sinopsis: {
    type: String
  },
  genero: {
    type: Schema.Types.ObjectId,
    ref: 'Genero'
  },
  director: {
    type: Schema.Types.ObjectId,
    ref: 'Director'
  },
  productora: {
    type: Schema.Types.ObjectId,
    ref: 'Productora'
  },
  tipo: {
    type: Schema.Types.ObjectId,
    ref: 'Tipo'
  },
  estreno: {
    type: Date
  },

    estreno: {
    type: Date
  },

  // Nueva mejora para incluir el trailer y la imagen de la película
  trailer: {
    type: String
  },
  imagen: {
    type: String
  },

  estado: {
    type: Boolean,
    default: true
  },

  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = model('Media', MediaSchema);