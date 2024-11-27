//Controlador de reservas actualizado


const Reserva = require('../models/Reserva');

// Obtener todas las reservas
exports.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener reservas', error });
  }
};

// Agregar reserva
exports.addReserva = async (req, res) => {
  console.log(req.body);
  const {
    numReserva,
    cliente,
    apellido,
    tipoDoc,
    numDoc,
    telefono,
    correo,
    acompañantes,
    fInicio,
    fFin,
    apartamentos,  // Modificación: ahora manejamos un array de apartamentos
    total,
    estado
  } = req.body;

  try {
    const newReserva = new Reserva({
      numReserva,
      cliente,
      apellido,
      tipoDoc,
      numDoc,
      telefono,
      correo,
      acompañantes,
      fInicio,
      fFin,
      apartamentos,  // Almacenamos el array de apartamentos
      total,
      estado
    });

    await newReserva.save();
    res.status(201).json(newReserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar reserva', error });
  }
};

// Editar reserva
exports.updateReserva = async (req, res) => {
  const { id } = req.params;
  const {
    numReserva,
    cliente,
    apellido,
    tipoDoc,
    numDoc,
    telefono,
    correo,
    acompañantes,
    fInicio,
    fFin,
    apartamentos,  // Modificación: ahora actualizamos los apartamentos
    total,
    estado
  } = req.body;

  try {
    const updatedReserva = await Reserva.findByIdAndUpdate(
      id,
      {
        numReserva,
        cliente,
        apellido,
        tipoDoc,
        numDoc,
        telefono,
        correo,
        acompañantes,
        fInicio,
        fFin,
        apartamentos,  // Actualizamos el array de apartamentos
        total,
        estado
      },
      { new: true }
    );
    res.json(updatedReserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar reserva', error });
  }
};

// Eliminar reserva
exports.deleteReserva = async (req, res) => {
  const { id } = req.params;
  try {
    await Reserva.findByIdAndDelete(id);
    res.json({ message: 'Reserva eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar reserva', error });
  }
};
