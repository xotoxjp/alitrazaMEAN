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
    analisis: [{type: mongoose.Types.ObjectId, ref:'Analisis'}],
    laboratorio: {type: mongoose.Types.ObjectId, ref: 'Laboratorio'},
    producto: {type: mongoose.Types.ObjectId, ref:'Producto'}
});

module.exports = mongoose.model('Muestra', MuestraSchema);