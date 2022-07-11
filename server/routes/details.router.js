const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


/**
 * discogs DETAILED GET route
 */
  router.get('/:id', (req, res) => {
   const { id } = req.params;
   console.log('the records id is', id)
   axios({
     method: 'GET', 
     url: `https://api.discogs.com/releases/${id}?&key=${process.env.DISCOGS_KEY}&secret=${process.env.DISCOGS_SECRET}`,
   }).then((response) => {
         console.log(response.data)
         res.send(response.data);
   }).catch( err => {
         console.log(err)
         res.sendStatus(500);
   });
})

module.exports = router;
