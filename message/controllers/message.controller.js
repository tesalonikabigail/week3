const messagesDB = require('../model/messages')

// GET
exports.getAllMessages = async(req, res) => {
    const result = await messagesDB.query()
    return res.status(200).send(result)
}

exports.getSpecificMessage = async(req, res) => {
    const { nim } = req.params
    const db2 = await messagesDB.query()

    if(db2.find(i => i.nim === parseInt(nim) ? true : false)){
        const result = await messagesDB.query().where({
            nim: nim
        })

        return res.status(200).send(result)
    }
    else
        return res.status(404).send({message: 'NIM ' + nim + ' tidak ditemukan'})
}

exports.getAllMessageDetails = async(req, res) => {
    /*   const people = await Person.query()
    .select('persons.*', 'parent.firstName as parentName')
    .join('persons as parent', 'persons.parentId', 'parent.id');
*/  
    const result = await messagesDB.query()
            .select( //namaTable.namaKolom as namaAlias
                'messages.nim as nim', 'messages.message as message', 'users.name as name')
            .join( //Table yg di join, join nya berdasarkan apa yang sama kyk di db biasa
                'users','users.nim', 'messages.nim'
            );
    
    return res.status(200).send(result)
}

exports.getSpecificMessageDetails = async(req, res) => {
    const { nim } = req.params
    const db2 = await messagesDB.query()

    if(db2.find(i => i.nim === parseInt(nim) ? true : false)){
        const result = await messagesDB.query()
                .select(
                    'messages.nim as nim', 'messages.message as message', 'users.name as name'
                )
                .join(
                    'users', 'users.nim', 'messages.nim' // Sama aja kyk ON nya db; FROM messages AS m JOIN users AS u ON(u.EmployeeID = m.ManagerID)
                )
                .where({ 'messages.nim': nim }); 
        
        return res.status(200).send(result)
    }
    else
        return res.status(404).send({message: 'NIM ' + nim + ' tidak ditemukan'})
}

// POST
exports.createMessage = async(req, res) => {
    const { nim, message } = req.body
    const db = await UsersDB.query()
    const db2 = await messagesDB.query()

    if(!db.find(i => i.nim === parseInt(nim) ? true : false))
        return res.status(404).send({message: 'NIM ' + nim + ' tidak ditemukan, jadi message tidak dapat diinput'})
    else if(db2.find(i => i.nim === parseInt(nim) ? true : false))
         return res.status(404).send({message: 'Message milik NIM ' + nim + ' sudah ada'})

    await messagesDB.query().insert({ 
        nim: nim,
        message: message
    })

    return res.status(200).send({message: 'Data Berhasil Ditambahkan'})
}

// PUT 
exports.updateMessage = async(req, res) => {
    const dataIn = req.params
    const { message } = req.body
    const db2 = await messagesDB.query()

    if(db2.find(i => i.nim === parseInt(dataIn.nim) ? true : false)){
        await messagesDB.query().update({
            message: message
        }).where({ nim: dataIn.nim })

        return res.status(200).send({message: 'Data Berhasil Diupdate'})
    }
    else
        return res.status(404).send({message: 'NIM ' + dataIn.nim + ' tidak ditemukan'})
}

// DELETE
exports.deleteMessage = async(req, res) => {
     const dataIn = req.params
    const db2 = await messagesDB.query()

    if(db2.find(i => i.nim === parseInt(dataIn.nim) ? true : false)){
        await messagesDB.query().delete().where({
            nim: dataIn.nim
        })

        return res.status(200).send({message: 'Data Berhasil Dihapus'})
    }
    else
        return res.status(404).send({message: 'NIM ' + dataIn.nim + ' tidak ditemukan'})
}
