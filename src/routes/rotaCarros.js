const init = () => {
    const router = require('express').Router()
    const carrosController = require('../controllers/carrosController')

    router.post('/', carrosController.postCarros)
    router.patch('/:id', carrosController.patchCarros)
    router.put('/:id', carrosController.putCarros)
    router.delete('/:id', carrosController.deleteCarros)
    router.get('/find', carrosController.getCarrosByQuery)
    router.get('/:id', carrosController.getCarrosById)
    router.get('/', carrosController.getCarros)
    return router

}

module.exports = init
