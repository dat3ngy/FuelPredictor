const express = require('express')
const router = express.Router()
const pool = require('./creds');

router.get('/', async (req, res) => {
    console.log('Getting username...');

    const allUsers = await pool.query(`SELECT * FROM usercredentials;`);
    const lastUser = allUsers.rows[allUsers.rows.length-1];
    console.log(lastUser);
    const lastUserProfile = await pool.query(`SELECT * FROM clientinformation WHERE username = '${lastUser.username}';`);
    res.json(lastUserProfile);
})

module.exports = router