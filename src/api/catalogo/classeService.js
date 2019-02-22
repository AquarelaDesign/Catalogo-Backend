const Classe = require('./classe')

Classe.methods(['get', 'post', 'put', 'delete'])
Classe.updateOptions({new: true, runValidators: true})

module.exports = Classe