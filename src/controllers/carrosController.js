const mongoose = require('mongoose')

const Carros = require('../models/carros')
const { Mongoose } = require('mongoose')

const getCarros = async (req, res) => {
    const limit = parseInt(req.query.limit)
    try {
        let carros = {}
        if (limit) carros = await Carros.find({}).limit(limit)
        else carros = await Carros.find({})
        return res.send(carros)
    } catch (err) {
        return res.status(500).send({ error: 'Erro na consulta de carros ' + err })
    }
}

const getCarrosById = async (req, res) => {
    try {
        const id = req.params.id
        const carros = await Carros.findOne({ "_id": Object(id) })
        return res.send(carros)
    } catch (err) {
        return res.status(500).send({ error: 'Erro na consulta de carros ' + err })
    }
}

const getCarrosByQuery = async (req, res) => {

    const { veiculo, marca, ano, descricao, cod_fipe, vendido } = req.query

    let carros = []

    if (veiculo) {
        console.log('veiculo')
        const veiculo2 = new RegExp(veiculo, 'i')
        const p1 = await Carros.find({ "veiculo": veiculo2 })
        carros.push(...p1)
    }
    if (marca) {
        console.log('marca')
        const marca2 = new RegExp(marca, 'i')
        const p2 = await Carros.find({ "marca": marca2 })
        carros.push(...p2)
    }
    if (ano) {
        console.log('ano')
        const ano2 = parseInt(ano)
        const p3 = await Carros.find({ "ano": ano2 })
        carros.push(...p3)
    }
    if (descricao) {
        console.log('descricao')
        const descricao2 = new RegExp(descricao, 'i')
        const p4 = await Carros.find({ "descricao": descricao2 })
        carros.push(...p4)
    }
    if (cod_fipe) {
        console.log('cod_fipe')
        const cod_fipe2 = new RegExp(cod_fipe, 'i')
        const p5 = await Carros.find({ "cod_fipe": cod_fipe2 })
        carros.push(...p5)
    }
    if (vendido) {
        // const vendido2 = new RegExp(vendido)
        console.log('vendido')
        const p6 = await Carros.find({ "vendido": true })
        carros.push(...p6)
    }
    return res.send({ carros })
}

const postCarros = async (req, res) => {
    const item = {
        veiculo: req.body.veiculo,
        marca: req.body.marca,
        ano: req.body.ano,
        descricao: req.body.descricao,
        cod_fipe: req.body.cod_fipe,
        vendido: req.body.vendido
    }
    let carro = new Carros(item)
    carro.save()
    return res.json(carro)
}

const patchCarros = async (req, res) => {
    let id = req.params.id
    let updateObject = req.body
    await Carros.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: updateObject }, (err, result) => {
        if (err) return res.status(500).send(err);
        else return res.json(result)
    })
}

const putCarros = async (req, res) => {
    let id = req.params.id
    let updateObject = req.body
    await Carros.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, { $set: updateObject }, {useFindAndModify: false}, (err, result) => {
        if (err) return res.status(500).send(err);
        else return res.json(result)
    })
}

const deleteCarros = async (req, res) => {
    let id = req.params.id
    await Carros.deleteOne({ _id: new mongoose.Types.ObjectId(id) }, {useFindAndModify: false}, (err, result) => {
        if (err) return res.status(500).send(err);
        else return res.json(result)
    })
}

module.exports = {
    getCarros,
    getCarrosById,
    getCarrosByQuery,
    postCarros,
    patchCarros,
    putCarros,
    deleteCarros
}
