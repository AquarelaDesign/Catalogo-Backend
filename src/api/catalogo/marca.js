const restful = require('node-restful')
const mongoose = restful.mongoose

const marcaSchema = new mongoose.Schema({
    Marca: { type: String, required: true }
},{collection: 'Marcas'})

module.exports = restful.model('Marca', marcaSchema)