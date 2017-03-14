'use strict'

const pg = require('pg')
const Conexao = require('./conexao')

class TodoDAO {
    constructor() {
    }

    getTodos() {
    }

    insert(todo) {
        return new Promise((resolve, reject) => {
            Conexao
                .conn
                .then(data => {
                    data
                        .client.query('begins', err => {
                            if (err) throw new Error('asdfasdf')

                            return data
                        })
                }).then(data => {
                    resolve(todo)
                }).catch(err => {
                    reject(err)
                })

        })
    }
}

module.exports = TodoDAO
