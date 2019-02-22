const restful = require('node-restful')
const mongoose = restful.mongoose

const itemSchema = new mongoose.Schema({
    Marca: { type: String, required: true },
    Tipo: { type: String, required: true },
    Classe: { type: String, required: true },
    Modelo: { type: String, required: true },
    Versao: { type: String, required: true },
    Ano: { type: String, required: true },
    Imagem: { type: String, required: true },
    Grupo: { type: String, required: true },
    Sequencia: { type: String, required: true },
    SubGrupo: { type: String, required: true },
    MapaPecas: { type: String, required: true },
    Ref_Peca: { type: String, required: true },
    Pos_X: { type: String, required: false },
    Pos_Y: { type: String, required: false },
    Pos_R: { type: String, required: false },
    Quantidade: { type: String, required: true },
    Codigo: { type: String, required: true },
    Descricao: { type: String, required: true }
},{collection: 'Itens'})

module.exports = restful.model('Item', itemSchema)