const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * discogs BASIC GET route
 */
 router.get('/', (req, res) => {
  const search= req.params.search;
  console.log(search)
  axios.get(`https://api.discogs.com/database/search?q=${search}&format=vinyl&key=${process.env.DISCOGS_KEY}&secret=${process.env.DISCOGS_SECRET}}`)
      .then((response) => {
          console.log(response.data)
      res.send(response.data);
  }).catch( err => {
      console.log(err)
      res.sendStatus(500);
  });
})

/**
 * discogs DETAILED GET route
 */
 router.get('/', (req, res) => {
  const recordID= req.params.search;
  axios.get(`https://api.discogs.com/releases/${recordID}`)
      .then((response) => {
          console.log(response.data)
      res.send(response.data);
  }).catch( err => {
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
