// npm init; npm install express; npm install cors; npm install --save-dev nodemon
// npm install knex; npm install --save mysql mysql2 knex objection -> knex init; 

const express = require('express')
const app = express()
const cors = require('cors') 

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./user/routes/user.route')(app) //dari line 2 passing params data line 5-7
require('./message/routes/messages.route')(app)

/* bikin crud masing" table 
    sama kyk yg modul2 cmn dipisah"
*/

const PORT = process.env.PORT || 8080
app.listen(PORT)
console.log(`Server running on port ${ PORT }`)