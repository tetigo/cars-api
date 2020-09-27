const init = () => {
    const express = require('express')
    const bodyParser = require('body-parser')
    const cors = require('cors')
    
    const app = express()

    const rotas = require('./routes')

    app.use(cors({ origin: true }))

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))
    // parse application/json
    app.use(bodyParser.json())

    app.use(rotas())

    return app
}

module.exports = init
