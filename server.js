require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.db_url, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to db'))

app.use(express.json())

const cribersRouter = require('./routes/cribers')
app.use('/cribers', cribersRouter)


app.listen(3000, () => console.log("server is running"))