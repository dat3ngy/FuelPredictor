const express = require('express')
const router = express.Router()



router.get('/:username/:password/:confirm', (req, res) => {
    const{username, password, confirm} = req.params;
    console.log(`Registration - User: ${username}`)
    console.log(`Registration - Password: ${password}`)
    console.log(`Registration - Confirm Password: ${confirm}`)
    console.log(`Registration - Passwords Match: ${password == confirm}`)
    res.json();
})

module.exports = router