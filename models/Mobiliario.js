// models/Mobiliario.js
const mongoose = require('mongoose');

const mobiliarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  identInmueble: { type: String, required: true },
  estado: { type: String, enum: ['activo', 'inactivo', 'manteniminto', 'trasferido'], required: true },
  observacion: { type: String }
});

module.exports = mongoose.model('Mobiliario', mobiliarioSchema);
