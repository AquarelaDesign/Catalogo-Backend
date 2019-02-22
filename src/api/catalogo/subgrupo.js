const restful = require('node-restful')
const mongoose = restful.mongoose

const subgrupoSchema = new mongoose.Schema({
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true },
    Grupo: { type: String, required: true },
    SubGrupo: { type: String, required: true }
},{collection: 'SubGrupos'})

module.exports = restful.model('SubGrupo', subgrupoSchema)