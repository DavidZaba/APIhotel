const TipoApartamento = require('../models/tipoApartamentos');

// Obtener todos los tipos de apartamentos
exports.getTipoApartamentos = async (req, res) => {
  try {
    const tipoApartamentos = await TipoApartamento.find();
    res.json(tipoApartamentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tipo de apartamento
exports.createTipoApartamento = async (req, res) => {
  const tipoApartamento = new TipoApartamento(req.body);
  try {
    const savedTipoApartamento = await tipoApartamento.save();
    res.status(201).json(savedTipoApartamento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un tipo de apartamento por ID
exports.getTipoApartamentoById = async (req, res) => {
  try {
    const tipoApartamento = await TipoApartamento.findById(req.params.id);
    if (!tipoApartamento) return res.status(404).json({ message: 'Tipo de apartamento no encontrado' });
    res.json(tipoApartamento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un tipo de apartamento
exports.updateTipoApartamento = async (req, res) => {
  try {
    const updatedTipoApartamento = await TipoApartamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTipoApartamento) return res.status(404).json({ message: 'Tipo de apartamento no encontrado' });
    res.json(updatedTipoApartamento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un tipo de apartamento
exports.deleteTipoApartamento = async (req, res) => {
    console.log("ID recibido:", req.params.id);
  try {
    const deletedTipoApartamento = await TipoApartamento.findByIdAndDelete(req.params.id);
    if (!deletedTipoApartamento) return res.status(404).json({ message: 'Tipo de apartamento no encontrado' });
    res.json({ message: 'Tipo de apartamento eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cambiar el estado del tipo de apartamento
exports.changeEstado = async (req, res) => {
  try {
    const updatedTipoApartamento = await TipoApartamento.findByIdAndUpdate(req.params.id, { estado: req.body.estado }, { new: true });
    if (!updatedTipoApartamento) return res.status(404).json({ message: 'Tipo de apartamento no encontrado' });
    res.json(updatedTipoApartamento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
