const Apartamento = require('../models/apartamento');

exports.getAllApartamentos = async (req, res) => {
    try {
        const apartamentos = await Apartamento.find();
        const formattedApartamentos = apartamentos.map(apto => ({
            _id: apto._id, // Incluye el ID para referencia futura
            numeroApto: apto.numeroApto,
            pisoApto: apto.pisoApto,
            tamanoApto: apto.tamanoApto,
            tarifaApto: apto.tarifaApto,
            estado: apto.estado
        }));
        res.json(formattedApartamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createApartamento = async (req, res) => {
    const apartamento = new Apartamento(req.body);
    try {
        const newApartamento = await apartamento.save();
        res.status(201).json(newApartamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getApartamento = async (req, res) => {
    try {
        const apartamento = await Apartamento.findById(req.params.id);
        if (apartamento == null) {
            return res.status(404).json({ message: 'Apartamento no encontrado' });
        }
        res.json(apartamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateApartamento = async (req, res) => {
    try {
        const apartamento = await Apartamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!apartamento) {
            return res.status(404).json({ message: 'Apartamento no encontrado' });
        }
        res.json(apartamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteApartamento = async (req, res) => {
    try {
        const apartamento = await Apartamento.findByIdAndDelete(req.params.id);
        if (!apartamento) {
            return res.status(404).json({ message: 'Apartamento no encontrado' });
        }
        res.json({ message: 'Apartamento eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Función para cambiar el estado del apartamento
exports.changeEstado = async (req, res) => {
    try {
        const { estado } = req.body; // Asegúrate de que el cuerpo de la solicitud incluya el estado
        const apartamento = await Apartamento.findByIdAndUpdate(req.params.id, { estado }, { new: true });
        
        if (!apartamento) {
            return res.status(404).json({ message: 'Apartamento no encontrado' });
        }

        res.json(apartamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.exportToExcel = async (req, res) => {
    try {
        const apartamentos = await Apartamento.find();
        // Aquí deberías implementar la lógica para convertir los datos a Excel
        // Por ejemplo, usando una librería como 'exceljs'
        res.download('/path/to/generated/excel/file.xlsx');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
