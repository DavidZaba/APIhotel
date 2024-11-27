const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importar rutas existentes
const userRoutes = require('./routes/userRoutes');
const mobiliarioRoutes = require('./routes/mobiliarioRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const hospedajeRoutes = require('./routes/hospedajeRoutes');
const descuentoRoutes = require('./routes/descuentoRoutes');
const loginRoutes = require('./routes/loginroutes'); // Nueva ruta para login
const apartamentosRoutes = require('./routes/apartamentos');
const tipoApartamentoRoutes = require('./routes/tipoApartamentoRoutes');

// Configuración de la aplicación
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/mobiliarios', mobiliarioRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/hospedajes', hospedajeRoutes);
app.use('/api/descuentos', descuentoRoutes);
app.use('/api/apartamentos', apartamentosRoutes);
app.use('/api/tipoapartamentos', tipoApartamentoRoutes);

// Ruta de login
app.use('/api/login', loginRoutes); // Integración de la ruta de login

// Conexión a MongoDB
mongoose.connect('mongodb+srv://dgoez2020:David2025@cluster0.m2vn6.mongodb.net/registrodb?retryWrites=true&w=majority&appName=Cluster0', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

// Configuración del puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
