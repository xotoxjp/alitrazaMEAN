const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnalisisSchema = new Schema({
    nombre: String,
    valor: Number,
    valorMIN: Number,
    valorMAX: Number,
    aprobado: Boolean
});

module.exports = mongoose.model('Analisis', AnalisisSchema);