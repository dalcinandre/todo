'use strict'

const router = require('express').Router()
const TodoDAO = require('../dao/todo')

router
    .post('/', (req, res) => {
        new TodoDAO().insert(req.body)
            .then(todo => todo)
            .then(todo => res.json( todo ))
            .catch(err => res.status(err.code || 500).json({ erro: err.error }))
    })

module.exports = router
