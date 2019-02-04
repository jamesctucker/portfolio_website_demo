const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- ROUTES ---------- **/
const portfolioRouter = require('./routes/portfolio_router.js');
app.use('/portfolio', portfolioRouter);

const adminRouter = require('./routes/admin_router.js');
app.use('/text-fields', adminRouter);

const deleteRouter = require('./routes/delete_router.js');
app.use('/delete', deleteRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});