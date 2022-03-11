const express = require('express')
const router = express.Router()

router.get('/:user/:pw', (req, res) => {
    console.log('Logging in...');
    const {user, pw} = req.params;
    console.log(`Login - User: ${user}`)
    console.log(`Login - Password: ${pw}`)

    res.json();
    return 1;
})

module.exports = router