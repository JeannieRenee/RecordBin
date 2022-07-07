const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all records
router.get('/', (req, res) => {
    const query = `
      SELECT * FROM records
      WHERE USER_ID = $1
      ORDER BY "title" ASC;
    `
    pool.query(query, [req.user.id])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: GET records', err);
        res.sendStatus(500)
      })
  });

// update record owned status in db 
router.put('/:id', (req, res) => {
  const  id  = req.params.id;
  console.log('put request for id', id);
  let sqlQuery = `
    UPDATE "records" 
    SET "owned" = NOT "owned"
    WHERE "id" = $1;
  `;
  const sqlParams = [
    id
  ];
  pool.query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(204);
    }).catch( (error) => {
      res.sendStatus(500); 
    })
})

// delete record from db 
router.delete('/:id', (req, res) => {
  let recordId = req.params.id;
  console.log('Delete request for id', recordId);
  let sqlQuery = `
    DELETE FROM "records" 
    WHERE "id" = $1;
  `;
  const sqlParams = [
    recordId,             
  ];
  pool.query(sqlQuery, sqlParams)
    .then(() => {
      console.log('task deleted');
      res.sendStatus(204);
    }).catch( (error) => {
      console.log(`Error making database query`, error);
      res.sendStatus(500); 
    })
})

// Add record to db collection
router.post('/', (req, res) => {
  console.log('in router.post req.body is', req.body)
  const album = req.body;
  let sqlQuery = `
    INSERT INTO "records" 
      ("user_id", "record_id", "cover", "title", "year", "country", "genre", "owned")
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8)
  `;
  const sqlParams = [ 1, album.id, album.cover_image, album.title, album.year, album.country, album.genre, album.owned ];
  pool.query(sqlQuery, sqlParams)
    .then((result) => {
      console.log(`Added album to the database`, album);
      res.sendStatus(201);
  })
  .catch((error) => {
      console.log(`Error making database query`, error);
      res.sendStatus(500);
  })
})

module.exports = router;