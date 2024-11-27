const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar usuarios
router.post('/register', userController.registerUser);

// Ruta para iniciar sesión
router.post('/login', userController.loginUser);

// Ruta para obtener todos los usuarios
router.get('/', userController.getUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', userController.getUserById);

// Ruta para actualizar un usuario
router.put('/:id', userController.updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', userController.deleteUser);

module.exports = router;
