const userController = require('../controllers/user.controller');

module.exports = function(app){
    app.get(
        '/api/users', 
        userController.getAllUSers
    )

    app.get(
        '/api/users/:nim', 
        userController.getSpecificUsers
    )

    app.post(
        '/api/users',
        userController.createUsers
    )
}