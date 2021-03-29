const express = require("express");

const app = express();

require('./db_connect');

require("dotenv").config();

const port = process.env.port || 3000;


app.listen((port), () => {
    console.log(`Backend Node Application is listen at the ${port}`);
});