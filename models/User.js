const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

  nombre: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  rol: {
    type: String,
    enum: ['administrador', 'docente'],
    required: true
  }

});

module.exports = model('User', UserSchema);
