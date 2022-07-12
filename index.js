//require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')

app.use('/', require('./routes/index'));

const uri = process.env.DATABASE_URL;

mongoose.connect( uri, {useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())

const subRouter = require('./routes/users')
app.use('/users', subRouter)
app.listen(3000, () => console.log('Server Started'))