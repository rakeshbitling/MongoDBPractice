const express = require("express");

const app = express();

require("dot-env").config;


const port = process.env.port || 3000;


app.listen((port), () => {
    console.log(`Backend Node Application is listen at the ${port}`);
});