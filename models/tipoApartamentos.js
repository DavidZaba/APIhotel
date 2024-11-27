const mongoose = require('mongoose');

const tipoApartamentoSchema = new mongoose.Schema({
  tipoApto: { type: String, required: true },
  descripcionApto: { type: String, required: true },
  capacidadApto: { type: Number, required: true },
  tamanoApto: { type: String, required: true },
  estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' }
});

module.exports = mongoose.model('TipoApartamento', tipoApartamentoSchema);
