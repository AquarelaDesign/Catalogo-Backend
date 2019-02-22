const restful = require('node-restful')
const mongoose = restful.mongoose

const classeSchema = new mongoose.Schema({
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true },
    Classe: { type: String, required: true }
},{collection: 'Classes'})

module.exports = restful.model('Classe', classeSchema)