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
 * discogs BASIC GET route
 */
 router.post('/', (req, res) => {
  const url = req.body.url;
  console.log('the url in the router is', req.body.url)
  axios({
    method: 'GET', 
    url: url,
  }).then((response) => {
        console.log(response)
        res.send(response.data);
  }).catch((err) => {
        console.log(err)
        res.sendStatus(500);
  });
})

module.exports = router;
