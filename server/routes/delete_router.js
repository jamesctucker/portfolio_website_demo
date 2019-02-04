const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM projects WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        .then((response) => {
            console.log(`server response: ${response}`);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Problem with deleting project: ${error}`);
            res.sendStatus(500);
        })

});

module.exports = router;