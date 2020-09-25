const app = require('./src/app')()

const HOST = '0.0.0.0'
const PORT = 3000

app.listen(PORT, HOST, ()=>{
    console.log(`Listening on port ${PORT}`)
})

