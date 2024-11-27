const mongoose = require('mongoose');

const hospedajeSchema = new mongoose.Schema({
  idejecucion: { type: String, required: true, unique: true },
  cliente: { type: String, required: true },
  idreserva: { type: String, required: true },
  finicio: { type: Date, required: true },
  ffin: { type: Date, required: true },
  fechacheckin: { type: Date, required: true },
  fechacheckout: { type: Date, required: true },
  pagoparcial: { type: Number, required: true },
  pagorestante: { type: Number, required: true },
  pagototal: { type: Number, required: true },
  estado: { type: String, required: true, enum: ['pendiente', 'en_curso', 'completado', 'cancelado'] }
});

module.exports = mongoose.model('Hospedaje', hospedajeSchema);