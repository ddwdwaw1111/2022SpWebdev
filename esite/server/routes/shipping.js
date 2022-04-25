const express = require('express');
const Shipping = require('../models/shipping');
const router = express.Router();

router.get('/', (req, res) => {
    try {
    const shipper = Shipping.getShipper();
    res.send(shipper);
    } catch(err) {
    res.status(401).send({message: err.message});
    }
   });

   module.exports = router;