const express = require('express')
const router = express.Router()
const pool = require('./creds');


router.post('/:username/:password/:confirm', async (req, res) => {
    const{username, password, confirm} = req.params;
    console.log(`Registration - User: ${username}`)
    console.log(`Registration - Password: ${password}`)
    console.log(`Registration - Confirm Password: ${confirm}`)
    console.log(`Registration - Passwords Match: ${password == confirm}`)
    
    var newAccount = await pool.query(`INSERT INTO usercredentials (username, password) 
        VALUES ($1, $2) RETURNING *`, [username, password]);
    console.log(newAccount);
    res.json();
})

module.exports = router