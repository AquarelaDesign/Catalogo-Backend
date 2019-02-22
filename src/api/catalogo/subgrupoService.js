const SubGrupo = require('./subgrupo')

SubGrupo.methods(['get', 'post', 'put', 'delete'])
SubGrupo.updateOptions({new: true, runValidators: true})

module.exports = SubGrupo