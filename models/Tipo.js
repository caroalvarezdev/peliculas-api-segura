const { Schema, model } = require('mongoose');

const TipoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = model('Tipo', TipoSchema);