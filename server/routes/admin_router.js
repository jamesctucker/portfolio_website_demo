const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "projects" ("title", "description", 
                     "date_completed", "github", "tag_id", "website")                   
                    VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.date_completed,
        newProject.github,
        newProject.tag,
        newProject.website,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('error in post', err);
            res.sendStatus(500);
        });
});

module.exports = router;