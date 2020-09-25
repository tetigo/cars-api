const getCarros = (req,res)=>{
    res.json({
        "veiculo": "Legend 3.2/3.5",
        "marca": "Acura",
        "cod_fipe": "038002-4",
        "vendido": false
      })
}



module.exports = {
    getCarros,
}
