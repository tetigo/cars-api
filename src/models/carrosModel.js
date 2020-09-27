// "veiculo": "Legend 3.2/3.5",
// "marca": "Acura",
// "cod_fipe": "038002-4",
// "vendido": false

// veiculo:   string
// marca:     string
// ano:       integer
// descricao: text
// vendido:   bool
// created:   datetime
// updated:   datetime


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CarroSchema = new Schema({
    veiculo: { type: String, required: true, unique: false, lowercase: true },
    marca: { type: String, required: true, unique: false, lowercase: true },
    ano: { type: Number, required: true },
    descricao: { type: String, required: false },
    cod_fipe: { type: String, required: true },
    vendido: { type: Boolean, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Carro', CarroSchema)
