const express = require('express');
const db = require('../data/db-comfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('carDealers')
    .then(cars => {
      res.status(200).json(cars); 
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
  });

module.exports = router;