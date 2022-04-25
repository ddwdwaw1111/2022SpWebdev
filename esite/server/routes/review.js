const express = require('express');
const Review = require('../models/review');
const router = express.Router();

router.get('/', (req, res) => {
    try {
    const review = Review.getReview();
    res.send(review);
    } catch(err) {
    res.status(401).send({message: err.message});
    }
   });

   module.exports = router;