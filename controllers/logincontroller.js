const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const LoginUser = require('../models/loginmodel'); // Asegúrate de que la ruta sea correcta

const jwtSecret = 'your_jwt_secret'; // Tu secreto JWT

// Iniciar sesión
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await LoginUser.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user._id, username: user.username }, jwtSecret, {
            expiresIn: '1h'
        });

        res.json({ token, message: 'Login exitoso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Registrar usuario
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userExists = await LoginUser.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new LoginUser({ username, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Leer todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await LoginUser.find({}, '-password'); // No devolver la contraseña
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Leer un usuario por ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await LoginUser.findById(id, '-password'); // No devolver la contraseña
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    try {
        const user = await LoginUser.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar los datos
        user.username = username || user.username;
        if (password) {
            user.password = await bcrypt.hash(password, 10); // Encriptar nueva contraseña
        }

        await user.save();
        res.json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await LoginUser.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
