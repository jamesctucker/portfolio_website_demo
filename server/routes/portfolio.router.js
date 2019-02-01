const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/portfolio', (req, res) => {
    const queryText = `SELECT * FROM projects`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT box query', error);
            res.sendStatus(500);
        });
});

module.exports = router;