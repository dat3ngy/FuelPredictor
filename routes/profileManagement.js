const express = require('express')
const router = express.Router()



router.get('/:fullName/:address1/:address2/:city/:state/:zipcode', (req, res) => {
    const{fullName, address1, address2, city, state, zipcode} = req.params;
    console.log(`Client Profile - Full Name: ${fullName}`)
    console.log(`Client Profile - Address 1: ${address1}`)
    console.log(`Client Profile - Address 2: ${address2}`)
    console.log(`Client Profile - City: ${city}`)
    console.log(`Client Profile - State: ${state}`)
    console.log(`Client Profile - Zip Code: ${zipcode}`) 
    res.json();
})

module.exports = router