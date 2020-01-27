const mongoose = require('mongoose');
const { Schema } = mongoose;

const PresupuestoSchema = new Schema({
    numero: Number,
    fechaIngreso: Date,
    prductor: {type: mongoose.Types.ObjectId, ref:'Productor'},
    sala: {type: mongoose.Types.ObjectId, ref:'Sala'},
    muestras: [{type: mongoose.Types.ObjectId, ref:'Muestra'}]
});

module.exports = mongoose.model('Presupuesto', PresupuestoSchema);