const express = require('express')
const app = express()
const dbConnection = require('./config/config')
const routes = require('./routes/posts')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT ?? 4500

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/',routes)


app.listen(PORT,() => {
    console.log(`Server listening on PORT ${PORT}`);
    
})

dbConnection()

module.exports = app
