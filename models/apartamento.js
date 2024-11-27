const mongoose = require('mongoose');

const apartamentoSchema = new mongoose.Schema({
    numeroApto: String,
    pisoApto: String,
    tamanoApto: String,
    tarifaApto: String,
    estado: {
        type: String,
        enum: ['activo', 'inactivo'], // Solo puede ser 'activo' o 'inactivo'
        default: 'activo',            // Por defecto, el apartamento estará 'activo'
      }
});

module.exports = mongoose.model('Apartamento', apartamentoSchema);