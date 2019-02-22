const restful = require('node-restful')
const mongoose = restful.mongoose

const modeloSchema = new mongoose.Schema({
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true },
    Classe: { type: String, required: true },
    Modelo: { type: String, required: true }
},{collection: 'Modelos'})

module.exports = restful.model('Modelo', modeloSchema)