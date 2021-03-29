const express = require("express");

const app = express();

require('./db_connect');

require("dotenv").config();

require('body-parser');

app.use(express.json());
// Main middleware
const authorRouter = require('./routes/user');

const port = process.env.port || 3000;

app.use('/', authorRouter);

app.listen((port), () => console.log(`Backend Node Application is listen at the best ${port}`));