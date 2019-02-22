const Marca = require('./marca')

Marca.methods(['get', 'post', 'put', 'delete'])
Marca.updateOptions({new: true, runValidators: true})

module.exports = Marca