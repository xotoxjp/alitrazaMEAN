const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: String
});

module.exports = mongoose.model('Producto', ProductoSchema);