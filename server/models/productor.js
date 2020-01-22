const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductorSchema = new Schema({
    nombre: { type: String, required: true },
    renapa: { type: String, required: true },
    direccion: { type: String, required: true },
    localidad: { type: String, required: true },
    provincia: { type: String, required: true },
    email: { type: String },
    telefono: { type: String },
    tipo: { type: String }
});

module.exports = mongoose.model('Productor', ProductorSchema);