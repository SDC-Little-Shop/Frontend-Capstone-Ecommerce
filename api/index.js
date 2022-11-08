const express = require('express');
const reviewRouter = require('./reviews/reviewRouter.js');
const qaRouter = require('./qa/qaRouter.js');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.json());

app.use('/qa', qaRouter);
app.use('/reviews', reviewRouter);

app.listen(port);
console.log(`Server listening at http://localhost:${port}`);