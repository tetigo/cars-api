const carrosDB = require('../models/carros')

const getCarros = async (req, res) => {
    const limit = parseInt(req.query.limit)
    try {
        let carros = {}
        carros = await carrosDB.getCarros(limit)
        return res.send(carros)
    } catch (err) {
        return res.status(500).send({ error: 'Erro na consulta de carros ' + err })
    }
}

const getCarrosById = async (req, res) => {
    try {
        const id = req.params.id
        let carros = await carrosDB.getCarrosById(id)
        return res.send(carros)
    } catch (err) {
        return res.status(500).send({ error: 'Erro na consulta de carros ' + err })
    }
}

const getCarrosByQuery = async (req, res) => {

    const { veiculo, marca, ano, descricao, cod_fipe, vendido } = req.query

    let carros = []
    try {
        if (veiculo) {
            console.log('veiculo')
            const veiculo2 = new RegExp(veiculo, 'i')
            const obj = { "veiculo": veiculo2 }
            const p1 = await carrosDB.getCarrosByQuery(obj)
            carros.push(...p1)
        }
        if (marca) {
            console.log('marca')
            const marca2 = new RegExp(marca, 'i')
            const obj = { "marca": marca2 }
            const p2 = await carrosDB.getCarrosByQuery(obj)
            carros.push(...p2)
        }
        if (ano) {
            console.log('ano')
            const ano2 = parseInt(ano)
            const obj = { "ano": ano2 }
            const p3 = await carrosDB.getCarrosByQuery(obj)
            carros.push(...p3)
        }
        if (descricao) {
            console.log('descricao')
            const descricao2 = new RegExp(descricao, 'i')
            const obj = { "descricao": descricao2 }
            const p4 = await carrosDB.getCarrosByQuery(obj)
            carros.push(...p4)
        }
        if (cod_fipe) {
            console.log('cod_fipe')
            const cod_fipe2 = new RegExp(cod_fipe, 'i')
            const obj = { "cod_fipe": cod_fipe2 }
            const p5 = await carrosDB.getCarrosByQuery(obj)
            carros.push(...p5)
        }
        if (vendido) {
            console.log('vendido')
            const obj = { "vendido": true }
            const p6 = await carrosDB.getCarrosByQuery(obj)
            carros.push(...p6)
        }
        return res.send({ carros })

    } catch (err) {
        return res.status(500).send({ error: 'Erro na consulta de carros ' + err })
    }
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
    let carro = carrosDB.newCarro(item)
    carro
        .then(result=>res.json(result))
        .catch(err=>res.send(err))
}

const patchCarros = async (req, res) => {
    let id = req.params.id
    let updateObject = req.body
    carrosDB.patchCarro(id, updateObject)
        .then((result)=>res.json(result))
        .catch((err)=>res.status(500).send(err))
}

const putCarros = async (req, res) => {
    let id = req.params.id
    let updateObject = req.body
    carrosDB.putCarro(id, updateObject)
        .then((result)=>res.json(result))
        .catch((err)=>res.status(500).send(err))
}

const deleteCarros = async (req, res) => {
    let id = req.params.id

    carrosDB.deleteCarro(id)
    .then((result)=>res.json(result))
    .catch((err)=>res.status(500).send(err))
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
