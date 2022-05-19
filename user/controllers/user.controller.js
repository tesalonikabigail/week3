const UsersDB = require('../model/users') //DB

// GET
exports.getAllUsers = async(req, res) => {
    const result = await UsersDB.query() 
    return res.status(200).send(result)
}

exports.getSpecificUser = async(req, res) => {
    const nim = req.params
    const db = await UsersDB.query()

    if(db.find(i => i.nim == parseInt(nim.nim)) ? true : false){
        const result = await UsersDB.query().where({
            nim: nim.nim
        })
        
        return res.status(200).send(result)
    } 
    else
        return res.status(404).send({message: 'NIM ' + nim.nim + ' tidak ditemukan'})
}

//POST
exports.createUser = async(req, res) => {
    const {nim, name} = req.body
    await UsersDB.query().insert({
        nim: nim,
        name: name
    })

    return res.status(200).send({message: 'Data Berhasil Ditambahkan'})
}

//PUT
exports.updateUser = async(req, res) => {
    const params = req.params;
    const {name} = req.body; 
    const db = await UsersDB.query() 

    if(db.find(i => i.nim === parseInt(params.nim) ? true : false)){
        await UsersDB.query().update({
            name: name
        }).where({ nim: params.nim })

        return res.status(200).send({message: 'Data Berhasil Diupdate'})
    }
    else
        return res.status(404).send({message: 'NIM ' + params.nim + ' tidak ditemukan'})
}

//DELETE
exports.deleteuser = async(req, res) => {
    const {nim} = req.params;
    const db = await UsersDB.query()

    if(db.find(i => i.nim === parseInt(nim) ? true : false)){
        await UsersDB.query().delete().where({
            nim: nim
        })

        return res.status(200).send({message: 'Data Berhasil Dihapus'})
    }
    else
        return res.status(404).send({message: 'NIM ' + nim + ' tidak ditemukan'})
}