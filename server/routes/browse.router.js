const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


/**
 * discogs BASIC GET route
 */
 router.get('/:searchterm', (req, res) => {
  const { searchterm } = req.params;
  console.log('the search term is', searchterm)
  axios({
    method: 'GET', 
    url: `https://api.discogs.com/database/search?q=${searchterm}&format=vinyl&key=${process.env.DISCOGS_KEY}&secret=${process.env.DISCOGS_SECRET}`,
  }).then((response) => {
        res.send(response.data);
  }).catch((err) => {
        console.log(err)
        res.sendStatus(500);
  });
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
