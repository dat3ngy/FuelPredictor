const express = require('express')
const router = express.Router()
const creds = require('./creds.json')
const { Pool } = require('pg')
const pool = new Pool(creds)

router.get('/:user/:pw', async (req, res) => {
    console.log('Logging in...');
    const {user, pw} = req.params;
    var result
    console.log(`Login - User: ${user}`)
    console.log(`Login - Password: ${pw}`)
    
    try {
        await pool.connect()
    }
    catch (err) {
        console.error('Unable to Connect to DB!')
    }

    try {
        result = await pool.query(`SELECT username FROM usercredentials WHERE username = '${user}' AND password = '${pw}';`)
    }
    catch (err) {
        console.error('Unable to Query!')
    }
    if (result.rowCount > 0) {
        console.log('Login Successful!')
    }
    else {
        console.log(`Login Failure!`)
    }
    res.json();
    return 1;
})

module.exports = router