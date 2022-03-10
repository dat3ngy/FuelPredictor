const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    user = req.body.user
    console.log(`Login - User: ${user}`)
    pw = req.body.pw
    console.log(`Login - Password: ${pw}`)
    res.sendFile('./menu.html', {root: './public'})
})

module.exports = router