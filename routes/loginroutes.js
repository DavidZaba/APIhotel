const express = require('express');
const router = express.Router();
const { loginUser, registerUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/logincontroller');

// Ruta para iniciar sesión (POST)
router.post('/loginUser', loginUser); // Cambiado de '/login' a '/'

// Ruta para registrar usuarios (POST)
router.post('/', registerUser);

// Ruta para obtener todos los usuarios (GET)
router.get('/', getAllUsers);

// Ruta para obtener un usuario por ID (GET)
router.get('/:id', getUserById);

// Ruta para actualizar un usuario (PUT)
router.put('/:id', updateUser);

// Ruta para eliminar un usuario (DELETE)
router.delete('/:id', deleteUser);

module.exports = router;
