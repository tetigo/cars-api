const init = () => {
    const router = require('express').Router()
    const rotaCarros = require('./rotaCarros')
    
    router.use('/veiculos', rotaCarros())
    return router

}

module.exports = init
