require('dotenv').config();

const express = require('express');
const sequelize = require('./config/config');
const materialRoutes = require('./routes/materialRoutes');
const movementRoutes = require('./routes/movementRoutes');
const userRoutes = require('./routes/userRoutes'); // Importar rutas de usuarios

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Inventario de Laboratorio');
});

// Rutas para materiales
app.use('/materials', materialRoutes);

// Rutas para movimientos
app.use('/movements', movementRoutes);

// Rutas para usuarios
app.use('/users', userRoutes); // Usar rutas de usuarios

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Error al sincronizar la base de datos:', err);
});