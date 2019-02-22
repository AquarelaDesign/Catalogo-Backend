const Tipo = require('./tipo')

Tipo.methods(['get', 'post', 'put', 'delete'])
Tipo.updateOptions({new: true, runValidators: true})

module.exports = Tipo