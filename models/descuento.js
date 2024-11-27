const mongoose = require('mongoose');

const descuentoSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  descuento: { type: Number, required: true },
  precioDescuento: { type: Number, required: true },
  fechaini: { type: Date, required: true },
  fechafin: { type: Date, required: true },
  estado: { type: String, enum: ['activo', 'inactivo'], required: true }
});

// Se omite el campo _id porque MongoDB lo maneja automáticamente
// Se puede añadir un campo adicional para mantener el ID de apartamento si es necesario, pero no será el identificador único principal.

module.exports = mongoose.model('Descuento', descuentoSchema);
