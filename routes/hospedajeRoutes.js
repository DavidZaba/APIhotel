const express = require('express');
const router = express.Router();
const hospedajeController = require('../controllers/hospedaje.controller');

router.post('/', hospedajeController.create);
router.get('/', hospedajeController.findAll);
router.get('/:id', hospedajeController.findOne);
router.put('/:id', hospedajeController.update);
router.delete('/:id', hospedajeController.delete);

module.exports = router;