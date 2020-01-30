const mongoose = require('mongoose');
const { Schema } = mongoose;

const LaboratorioSchema = new Schema({
    nombre: String,
    direccion: String
});

module.exports = mongoose.model('Laboratorio', LaboratorioSchema);