const express = require('express')
const router = express.Router()
const pool = require('./creds');




router.get('/:user/:pw', async (req, res) => {
    console.log('Logging in...');
    const {user, pw} = req.params;
    console.log(`Login - User: ${user}`)
    console.log(`Login - Password: ${pw}`)
    const checkUser = await pool.query(`SELECT * FROM usercredentials WHERE username = '${user}' AND password = '${pw}'`);
    if (checkUser.rows.length > 0){
        console.log('Valid....');
        const deleteUser = await pool.query(`DELETE FROM usercredentials WHERE username = '${user}'`);
        const insertUser = await pool.query(`INSERT INTO usercredentials (username, password) 
        VALUES ($1, $2) RETURNING *`, [user, pw]);
        res.json(checkUser);
    }
    else {
        console.log('Invalid....');
        res.json(checkUser);
    }
})

module.exports = router