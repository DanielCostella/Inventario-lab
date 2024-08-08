require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/config');
const materialRoutes = require('./routes/materialRoutes');
const movementRoutes = require('./routes/movementRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/AuthController'); // Si tienes autenticación

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Inventario de Laboratorio');
});

app.use('/api/materials', materialRoutes);
app.use('/api/movements', movementRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); // Si tienes autenticación

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Error al sincronizar la base de datos:', err);
});