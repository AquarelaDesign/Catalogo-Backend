const restful = require('node-restful')
const mongoose = restful.mongoose

//mongoose.collection('Tipos')

const tipoSchema = new mongoose.Schema({
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true }
},{collection: 'Tipos'})

module.exports = restful.model('Tipo', tipoSchema)