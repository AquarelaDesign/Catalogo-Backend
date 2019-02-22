const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // CATALOGO Routes
    const tipoService = require('../api/catalogo/tipoService')
    tipoService.register(router, '/tipos')

    const marcaService = require('../api/catalogo/marcaService')
    marcaService.register(router, '/marcas')

    const classeService = require('../api/catalogo/classeService')
    classeService.register(router, '/classes')

    const grupoService = require('../api/catalogo/grupoService')
    grupoService.register(router, '/grupos')

    const modeloService = require('../api/catalogo/modeloService')
    modeloService.register(router, '/modelos')

    const subgrupoService = require('../api/catalogo/subgrupoService')
    subgrupoService.register(router, '/subgrupos')

    const versaoService = require('../api/catalogo/versaoService')
    versaoService.register(router, '/versoes')

    const logService = require('../api/catalogo/logService')
    logService.register(router, '/logs')

    const itemService = require('../api/catalogo/itemService')
    itemService.register(router, '/itens')
}