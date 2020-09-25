const init = () => {
    const express = require('express')
    const cors = require('cors')
    const app = express()

    const rotas = require('./routes')

    app.use(cors({origin: true}))
    app.use(rotas())

    return app
}

module.exports = init
