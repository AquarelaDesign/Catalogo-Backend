const Grupo = require('./grupo')

Grupo.methods(['get', 'post', 'put', 'delete'])
Grupo.updateOptions({new: true, runValidators: true})

module.exports = Grupo