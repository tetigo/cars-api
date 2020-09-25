const init = () => {
    const router = require('express').Router()
    const carrosController = require('../controllers/carrosController')

    router.get('/', carrosController.getCarros)
    return router

}

module.exports = init
