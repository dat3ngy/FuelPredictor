const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    user = req.body.user
    console.log(`Registration - User: ${user}`)
    pw = req.body.pw
    console.log(`Registration - Password: ${pw}`)
    confPw = req.body.confPw
    console.log(`Registration - Confirm Password: ${confPw}`)
    console.log(`Registration - Passwords Match: ${pw == confPw}`)

    if (pw == confPw) {
        res.sendFile('./afterreg.html', {root: './public'})
    }
    else {
        res.sendFile('./ClientRegistration.html', {root: './public'})
    }
})

module.exports = router