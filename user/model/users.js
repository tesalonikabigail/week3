const { Model } = require('objection')
const knex = require('../../config/knex') //import

Model.knex(knex)

class Users extends Model {
    static get tableName(){
        return 'users'
    }
}

module.exports = Users