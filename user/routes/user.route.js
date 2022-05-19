const userController = require('../controllers/user.controller')

module.exports = function(app){
    app.get('/api/users', userController.getAllUsers)
    app.get('/api/users/:nim', userController.getSpecificUser)
    app.post('/api/users', userController.createUser)
    app.put('/api/users/:nim', userController.updateUser)
    app.delete('/api/users/:nim', userController.deleteuser)
} 