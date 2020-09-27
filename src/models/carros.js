const util = require('util')
const mongoose = require('mongoose')
const Carros = require('./carrosModel')


const getCarros = async(limit) => {
    let carros = []
    if (limit) carros = await Carros.find({}).limit(limit)
    else carros = await Carros.find({})
    return carros
}
const getCarrosById = async(id) => {
    return await Carros.findOne({ "_id": Object(id) })
}
const getCarrosByQuery = async(obj) => {
    return await Carros.find(obj)
}
const newCarro = async(item) => {
    let carro = new Carros(item)
    carro.save()
    return carro
}
const patchCarro = async(id, updateObject) => {
    return new Promise((res,rej)=>{
        Carros.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: updateObject },(err,result)=>{
            if(err) return rej(err)
            else return res(result)
        })
    })
}
const putCarro = async(id, updateObject) => {
    return new Promise((res, rej)=>{
        Carros.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, { $set: updateObject }, { useFindAndModify: false }, (err, result) => {
            if(err) return rej(err)
            else return res(result)
        })
    })
}
const deleteCarro = async(id) => {
    return new Promise((res,rej)=>{
        Carros.deleteOne({ _id: new mongoose.Types.ObjectId(id) }, { useFindAndModify: false }, (err, result) => {
            if(err) return rej(err)
            else return res(result)
        })
    })
}

module.exports = {
    getCarros,
    getCarrosById,
    getCarrosByQuery,
    newCarro,
    patchCarro,
    putCarro,
    deleteCarro
}