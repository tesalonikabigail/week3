const messageDB = require('../model/messages')

exports.getAllMessage = async (req, res) => {
    try{
        const a = await messageDB.query()
        return res.status(200).send(a)
    } catch (err) {
      return res.status(500).send({message: err.message})
    }
}

exports.getSpecificMessage = async (req, res) => {
    const {nim} = req.params
    const a = await messageDB.query().where({
        nim: nim
    })

    return res.status(200).send(a)
}

exports.getAllMessageDetail = async (req, res) => {
    const a = await messageDB.query()
    .join(
        'users', 
        'message.nim', 
        '=' ,
        'users.nim'
    )
    .select(
        'message.nim as nim', 
        'users.name as name', 
        'message.message as message'
    )
    return res.status(200).send(a)
}
