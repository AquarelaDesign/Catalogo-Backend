const Log = require('./log')

Log.methods(['get', 'post', 'put', 'delete'])
Log.updateOptions({new: true, runValidators: true})

module.exports = Log