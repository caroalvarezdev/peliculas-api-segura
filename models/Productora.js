const { Schema, model } = require('mongoose');

const ProductoraSchema = new Schema({
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
module.exports = model('Productora', ProductoraSchema);