const messagesController = require('../controllers/message.controller')

module.exports= function(app){ //module.export lngsng export semua klo yg di dlm controller itu 11
    app.get('/api/messages', messagesController.getAllMessages)
    app.get('/api/messages/:nim', messagesController.getSpecificMessage)
    app.get('/api/messageDetails', messagesController.getAllMessageDetails)
    app.get('/api/messageDetails/:nim', messagesController.getSpecificMessageDetails)
    app.post('/api/messages/:nim', messagesController.createMessage)
    app.put('/api/messages/:nim', messagesController.updateMessage)
    app.delete('/api/messages/:nim', messagesController.deleteMessage)
}