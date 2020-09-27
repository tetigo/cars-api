const mongoose = require('mongoose')

const app = require('./src/app')()

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
var url = 'mongodb://localhost:27017/ykron';

const HOST = '0.0.0.0'
const PORT = 3333


mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err)=>{
    console.log('Erro na Conexao com Banco de Dados ' + err)
})
mongoose.connection.on('connected', ()=>{
    console.log('Aplicacao Conectada ao Banco de Dados')
})
mongoose.connection.on('disconnected', ()=>{
    console.log('Aplicacao Desconectada do Banco de Dados')
})



app.listen(PORT, HOST, ()=>{
    console.log(`Listening on port ${PORT}`)
})

