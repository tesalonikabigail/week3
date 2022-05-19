const messageController = require('../controller/message.controller')

module.exports = function(app){
    app.get(
        '/api/message', 
        messageController.getAllMessage
    )

    app.get(
        '/api/message/:nim',
        messageController.getSpecificMessage
    )

    app.get(
        '/api/messageDetail',
        messageController.getAllMessageDetail
    )
}