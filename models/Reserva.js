//modelo reservas actualizado


const mongoose = require('mongoose');

// Esquema de Reservas
const reservaSchema = new mongoose.Schema({
  numReserva: {
    type: String,
    required: [true, 'El número de reserva es obligatorio']
  },
  cliente: {
    type: String,
    required: [true, 'El nombre del cliente es obligatorio']
  },
  apellido: {
    type: String,
    required: [true, 'El apellido del cliente es obligatorio']
  },
  tipoDoc: {
    type: String,
    enum: ['CC', 'TI', 'PP'],
    required: [true, 'El tipo de documento es obligatorio']
  },
  numDoc: {
    type: String,
    required: [true, 'El número de documento es obligatorio']
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es obligatorio'],
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v); // Validar que tenga 10 dígitos
      },
      message: props => `${props.value} no es un número de teléfono válido!`
    }
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v); // Validar formato de correo
      },
      message: props => `${props.value} no es un correo electrónico válido!`
    }
  },
  acompañantes: {
    type: Number,
    required: [true, 'El número de acompañantes es obligatorio'],
    validate: {
      validator: function (v) {
        return v >= 0 && v <= 3; // Validar que no haya más de 3 acompañantes
      },
      message: props => `El número de acompañantes no puede ser mayor a 3!`
    }
  },
  fInicio: {
    type: Date,
    required: [true, 'La fecha de inicio es obligatoria'],
    validate: {
      validator: function (v) {
        return v > new Date(); // Validar que la fecha de inicio sea futura
      },
      message: props => `La fecha de inicio debe ser en el futuro!`
    }
  },
  fFin: {
    type: Date,
    required: [true, 'La fecha de fin es obligatoria'],
    validate: {
      validator: function (v) {
        return v > this.fInicio; // Validar que la fecha de fin sea posterior a la de inicio
      },
      message: props => `La fecha de fin debe ser posterior a la fecha de inicio!`
    }
  },
  tipoApto: {
    type: String,
    enum: ['tipo1', 'tipo2', 'Penthouse'],
    required: [true, 'El tipo de apartamento es obligatorio']
  },
  total: {
    type: Number,
    required: [true, 'El total es obligatorio'],
    min: [0, 'El total no puede ser negativo'] // Validar que el total no sea negativo
  },
  estado: {
    type: String,
    enum: ['confirmado', 'pendiente', 'cancelado'],
    required: [true, 'El estado es obligatorio']
  }
});

// Middleware para validar que la fecha de fin es posterior a la fecha de inicio
reservaSchema.pre('validate', function (next) {
  if (this.fFin <= this.fInicio) {
    this.invalidate('fFin', 'La fecha de fin debe ser posterior a la fecha de inicio.');
  }
  next();
});

// Crear el modelo de Mongoose
module.exports = mongoose.model('Reserva', reservaSchema);
