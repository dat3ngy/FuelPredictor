const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    fullName = req.body.fullname
    console.log(`Client Profile - Full Name: ${fullName}`)
    address1 = req.body.address1
    console.log(`Client Profile - Address 1: ${address1}`)
    address2 = req.body.address2
    console.log(`Client Profile - Address 2: ${address2}`)
    city = req.body.city
    console.log(`Client Profile - City: ${city}`)
    state = req.body.state
    console.log(`Client Profile - State: ${state}`)
    zipCode = req.body.zipcode
    console.log(`Client Profile - Zip Code: ${zipCode}`)
    
    res.sendFile('./menu.html', {root: './public'})
})

module.exports = router