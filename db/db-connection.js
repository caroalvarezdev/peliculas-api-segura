const mongoose = require('mongoose');

const getConnection = async () => {
  try {
    const url = process.env.MONGO_URI;

    await mongoose.connect(url);

    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.log("Error al conectar la base de datos", error);
  }
};

module.exports = { getConnection };
