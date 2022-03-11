const express = require('express')
const router = express.Router()
var util = require('util')

class pricingModule {
    constructor(curPrice) {
      this.curPrice = curPrice;
      this.margin = marginCal(); 
      this.sugPrice = this.curPrice + this.margin;
    }

    get curPrice(){
        return this.curPrice;
    }

    get margin(){{
        return this.margin;
    }}

    get sugPrice(){
        return this.sugPrice;
    }

    marginCal(){
        return 0.1; // hard code for now, this will be edited later
    }
}


module.exports = router



