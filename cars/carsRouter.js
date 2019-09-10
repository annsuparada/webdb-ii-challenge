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

  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('carDealers').where({ id }).first()
    .then(cars => {
      res.json(cars);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
  });
  
  router.post('/', (req, res) => {
    const carData = req.body;
    db('carDealers').insert(carData)
    .then(ids => {
      db('carDealers').where({ id: ids[0] })
      .then(newcarEntry => {
        res.status(201).json(newcarEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });

module.exports = router;