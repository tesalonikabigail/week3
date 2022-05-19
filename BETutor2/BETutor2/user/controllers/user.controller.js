const usersDB = require('../model/users')

exports.getAllUSers = async (req, res) => {
    const a = await usersDB.query()
    return res.status(200).send(a)
}

exports.getSpecificUsers = async (req, res) => {
    const {nim} = req.params
    const a = await usersDB.query().where({
        nim: nim
    })
    return res.status(200).send(a)
}

exports.createUsers = async (req, res) => {
    const {nim, name} = req.body
    await usersDB.query().insert({
        nim: nim,
        name: name
    })
    return res.status(200).send({
        message: "Data berhasil ditambahkan."
    })
}



