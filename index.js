require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getConnection } = require('./db/db-connection');

const generoRoutes = require('./routes/generoRoutes');
const directorRoutes = require('./routes/directorRoutes');
const productoraRoutes = require('./routes/productoraRoutes');
const tipoRoutes = require('./routes/tipoRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/generos', generoRoutes);
app.use('/api/directores', directorRoutes);
app.use('/api/productoras', productoraRoutes);
app.use('/api/tipos', tipoRoutes);
app.use('/api/medias', mediaRoutes);
app.use('/api/users', userRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API de Películas funcionando 🚀');
});

// Conectar basea de datos (no bloquea servidor)
getConnection();

// Levantar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

//comando: 