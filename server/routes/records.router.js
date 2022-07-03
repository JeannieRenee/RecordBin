const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `SELECT * FROM records;`

    pool.query(query)
      .then( result => {
        console.log(result.rows)
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: GET records', err);
        res.sendStatus(500)
      })
  });

module.exports = router;