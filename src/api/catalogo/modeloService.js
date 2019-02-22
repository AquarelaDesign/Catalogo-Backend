const Modelo = require('./classe')

Modelo.methods(['get', 'post', 'put', 'delete'])
Modelo.updateOptions({new: true, runValidators: true})

module.exports = Modelo