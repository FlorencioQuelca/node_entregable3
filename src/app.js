const express = require('express')


// 
const db = require('./utils/database')
const config = require('../config')
const app = express()

app.use(express.json())


db.authenticate()
    .then(() => console.log("database authenticate"))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log("syncronized"))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Ok!' })
})


app.listen(config.api.port, () => {
    console.log(`Server started at port ${config.api.host}`)
})