const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "projects"
                        JOIN "tags" ON "projects"."tag_id" = "tags"."tag_id"`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT box query', error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "tags";`
    pool.query(queryText).then((result) => {
        console.log('in result', result);
        res.send(result.rows);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error completing select Tag query', error);
    })
});

module.exports = router;




