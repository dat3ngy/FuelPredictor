const express = require('express')
const router = express.Router()
var util = require('util')

let galreqs = [];
let datereqs = [];
let totals = [];
let n = 0;

router.get('/:galreq/:datereq/:total', (req, res) => {
    const{galreq, datereq, total} = req.params;
    console.log(`Quote - Gallon Request: ${galreq}`)
    console.log(`Quote - Date Request: ${datereq}`)
    console.log(`Quote - Total: ${total}`)
    galreqs[n] = galreq;
    datereqs[n] = datereq;
    totals[n] = total;
    n++;
    res.json(total);
})

router.get('/', (req, res) => {
    
    try {
        let quote = 
        {
            "galreqs": galreqs,
            "datereqs": datereqs,
            "totals": totals
        }
        console.log(quote);
        res.json(quote);
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }

})


module.exports = router



