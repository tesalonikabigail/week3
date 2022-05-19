const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./user/routes/user.route')(app)
require('./message/routes/message.route')(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Listening to the server ${PORT}`)
})