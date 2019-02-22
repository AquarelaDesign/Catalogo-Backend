const restful = require('node-restful')
const mongoose = restful.mongoose

const logSchema = new mongoose.Schema({
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true },
    Classe: { type: String, required: true },
    Modelo: { type: String, required: true },
    Versao: { type: String, required: true },
    Ano: { type: String, required: true },
    Referencia: { type: String, required: true },
    Imagem: { type: String, required: true },
    Catalogo: { type: String, required: true }
},{collection: 'Logs'})

module.exports = restful.model('Log', logSchema)