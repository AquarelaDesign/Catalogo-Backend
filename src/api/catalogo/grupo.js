const restful = require('node-restful')
const mongoose = restful.mongoose

const grupoSchema = new mongoose.Schema({
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true },
    Grupo: { type: String, required: true }
},{collection: 'Grupos'})

module.exports = restful.model('Grupo', grupoSchema)