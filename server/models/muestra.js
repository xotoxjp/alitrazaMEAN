const mongoose = require('mongoose');
const { Schema } = mongoose;

const MuestraSchema = new Schema({
    numero: Number,
    prductor: {type: mongoose.Types.ObjectId, ref:'Productor'},
    valorHMF: Number,
    valorColor: Number,
    valorHumedad: Number,
    valorAcidez: Number,
    resultado: String,
    fechaAnalisis: Date,
});

module.exports = mongoose.model('Muestra', MuestraSchema);