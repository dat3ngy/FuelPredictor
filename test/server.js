// Libraries used for the Node Express Server
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// Libraries used for connecting to a PSQL Database and running PSQL commands
const {Pool} = require('pg')
const creds = require('./creds.json')
const pool = new Pool(creds)

app.use(express.static(__dirname + '/'))

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.post('/login', async (req, res) => {
    try {
        await pool.connect()
        console.log('DB Connection Successful!')
    }
    catch(err) {
        console.log('Unable to Connect to DB!')
    }
    user = req.body.user
    pw = req.body.pw
    try {
        query = await pool.query(`SELECT username FROM accounts WHERE username LIKE '${user}' AND password LIKE '${pw}';`)
    }
    catch(err) {
        console.log('Unable to Query!')
    }
    console.log(query.rows)
    if (query.rowCount > 0) {
        res.sendFile('./menu.html', {root: __dirname})
    }
    else {
        res.sendFile('./login.html', {root: __dirname})
    }
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})

process.on('SIGTERM', async () => {
    server.close(async () => {
        await pool.end()
        console.log('Server terminated')
    })
})