const Hospedaje = require('../models/hospedaje.model');

exports.create = async (req, res) => {
  try {
    const hospedaje = new Hospedaje(req.body);
    const savedHospedaje = await hospedaje.save();
    res.status(201).json(savedHospedaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const hospedajes = await Hospedaje.find();
    res.status(200).json(hospedajes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const hospedaje = await Hospedaje.findById(req.params.id);
    if (!hospedaje) {
      return res.status(404).json({ message: 'Hospedaje no encontrado' });
    }
    res.status(200).json(hospedaje);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedHospedaje = await Hospedaje.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHospedaje) {
      return res.status(404).json({ message: 'Hospedaje no encontrado' });
    }
    res.status(200).json(updatedHospedaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedHospedaje = await Hospedaje.findByIdAndDelete(req.params.id);
    if (!deletedHospedaje) {
      return res.status(404).json({ message: 'Hospedaje no encontrado' });
    }
    res.status(200).json({ message: 'Hospedaje eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};