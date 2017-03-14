'use strict'

const express = require('express')
const todo = require('./route/todo')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.use('/', todo)

app.listen(8000, () => console.log(`Started on port 8000`))
