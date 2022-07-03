const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


/**
 * discogs DETAILED GET route
 */
  router.get('/:recordID', (req, res) => {
   const { recordID } = req.params;
   console.log('the records id is', recordID)
   axios({
     method: 'GET', 
     url: `https://api.discogs.com/releases/${recordID}`,
   }).then((response) => {
         console.log(response.data)
         res.send(response.data);
   }).catch( err => {
         console.log(err)
         res.sendStatus(500);
   });
})

module.exports = router;
