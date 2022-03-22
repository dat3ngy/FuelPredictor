// WIP WIP WIP WIP WIP WIP WIP 

const creds = require('./creds.json')
const { Pool } = require('pg')
const pool = new Pool(creds)

class Postgres {
    constructor() {
        pool.connect()
    }
}