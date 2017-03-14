'use strict'

const Pool = require('pg').Pool;
const teste = true;
const conexao = null;

class Conexao {

    constructor(conexao) {
        if (teste != conexao) throw new Error("Esta classe nao pode ser instanciada! Chame Conexao.conn");

        this.pool = new Pool({
            user: 'todo',
            database: 'todo',
            password: 'kmab1960',
            host: '127.0.0.1',
            port: 5432,
            max: 5,
            idleTimeoutMillis: 30000,
        })
    }

    static get conn() {
        if (!this[conexao]) {
            this[conexao] = new Conexao(true);
        }

        //return this[conexao].pool;

        return new Promise((resolve, reject) => {
            this[conexao].pool.connect((err, client, done) => {
                if (err) reject({err, done})

                resolve({client, done})
            })
        })
    }
}

module.exports = Conexao;