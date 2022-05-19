const { Model } = require('objection')
const knex = require('../../config/knex')

Model.knex(knex)

class Messages extends Model {
    static get tableName () {
      return 'message'
    }

    static get relationMappings(){
        const Users = require('../../user/model/users')

        return{
            users:{
              relation: Model.HasManyRelation,
              modelClass: Users,
              join:{
                from: 'message.nim',
                to: 'users.nim'
              }
            }
        }
    }
}

module.exports = Messages