const Versao = require('./versao')

Versao.methods(['get', 'post', 'put', 'delete'])
Versao.updateOptions({new: true, runValidators: true})

module.exports = Versao