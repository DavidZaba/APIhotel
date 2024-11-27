const express = require('express');
const router = express.Router();
const apartamentoController = require('../controllers/apartamentoController');

router.get('/', apartamentoController.getAllApartamentos);
router.post('/', apartamentoController.createApartamento);
router.get('/:id', apartamentoController.getApartamento);
router.put('/:id', apartamentoController.updateApartamento);
router.delete('/:id', apartamentoController.deleteApartamento);
router.put('/:id/estado', apartamentoController.changeEstado);
router.get('/export', apartamentoController.exportToExcel);

module.exports = router;