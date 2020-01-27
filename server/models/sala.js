const mongoose = require('mongoose');
const { Schema } = mongoose;

const SalaSchema = new Schema({
    codigo: String
});

module.exports = mongoose.model('Sala', SalaSchema);