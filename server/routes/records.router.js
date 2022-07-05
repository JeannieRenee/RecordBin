const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all records
router.get('/', (req, res) => {
    const query = `
      SELECT * FROM records
      ORDER BY "title" ASC;
    `
    pool.query(query)
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
// router.post('/:id', (req, res) => {
//   let recordId = req.params.id;
//   console.log('record added to collection', recordId);
//   let sqlQuery = `
//   INSERT INTO "records" 
// 	  ("user_id", "record_id", "cover", "title", "year", "country", "genre", "style", "owned")
//   VALUES 
// 		($1, $2, $3, $4, $5, $6, $7, $8, true), 
//   `;
//   const sqlParams = [
//   ];
//   pool.query(sqlQuery, sqlParams)
//     .then(() => {
//       console.log('task deleted');
//       res.sendStatus(204);
//     }).catch( (error) => {
//       console.log(`Error making database query`, error);
//       res.sendStatus(500); 
//     })
// })

// Add record to db wishlist
// router.post('/:id', (req, res) => {
//   let recordId = req.params.id;
//   console.log('record added to wishlist', recordId);
//   let sqlQuery = `
//   INSERT INTO "records" 
// 	  ("user_id", "record_id", "cover", "title", "year", "country", "genre", "style", "owned")
//   VALUES 
// 		($1, $2, $3, $4, $5, $6, $7, $8, false), 
//   `;
//   const sqlParams = [
//   ];
//   pool.query(sqlQuery, sqlParams)
//     .then(() => {
//       console.log('task deleted');
//       res.sendStatus(204);
//     }).catch( (error) => {
//       console.log(`Error making database query`, error);
//       res.sendStatus(500); 
//     })
// })

module.exports = router;