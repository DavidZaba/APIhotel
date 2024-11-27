const express = require('express');
const router = express.Router();
const tipoApartamentoController = require('../controllers/tipoApartamentoController');

// Rutas de tipos de apartamentos
router.get('/', tipoApartamentoController.getTipoApartamentos);
router.post('/', tipoApartamentoController.createTipoApartamento);
router.get('/:id', tipoApartamentoController.getTipoApartamentoById);
router.put('/:id', tipoApartamentoController.updateTipoApartamento);
router.delete('/:id', tipoApartamentoController.deleteTipoApartamento);
router.patch('/:id/estado', tipoApartamentoController.changeEstado);

module.exports = router;
