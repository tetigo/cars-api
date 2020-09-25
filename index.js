const express = require('express')

const HOST = '0.0.0.0'
const PORT = 3000

const app = express()


app.get('/',(req,res)=>{
    res.json({
        "veiculo": "Legend 3.2/3.5",
        "marca": "Acura",
        "cod_fipe": "038002-4",
        "vendido": false
      })
})

app.listen(PORT, HOST, ()=>{
    console.log(`Listening on port ${PORT}`)
})

