// routes/reservaRoutes.js actualizado
const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Rutas para gestionar reservas
router.get('/', reservaController.getReservas);
router.post('/', reservaController.addReserva);
router.put('/:id', reservaController.updateReserva);
router.delete('/:id', reservaController.deleteReserva);

module.exports = router;
