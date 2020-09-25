const init = () => {
    const router = require('express').Router()
    const rotaCarros = require('./rotaCarros')
    
    router.use('/', rotaCarros())
    return router

}

module.exports = init
