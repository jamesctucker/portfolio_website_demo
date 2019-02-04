const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const addProject = req.body;
    const queryText = `INSERT INTO "projects" ("title", "description", 
                     "date_completed", "github", "tag_id", "website")                   
                    VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [
        addProject.name,
        addProject.description,
        addProject.date_completed,
        addProject.github,
        addProject.tag,
        addProject.website,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('error in post', err);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    const queryText = 'DELETE FROM "projects" WHERE "id"=$1';
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