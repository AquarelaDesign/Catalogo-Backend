const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://procyon:S1ar3@cluster0-shard-00-00-snszh.mongodb.net:27017,cluster0-shard-00-01-snszh.mongodb.net:27017,cluster0-shard-00-02-snszh.mongodb.net:27017/Catalogo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
module.exports = mongoose.connect(url, { useNewUrlParser: true })
//module.exports = mongoose.connect('mongodb://localhost/Catalogo', { useMongoClient: true })