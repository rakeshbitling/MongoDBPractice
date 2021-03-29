const mongoose = require('mongoose');
require("dotenv").config();


mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => console.error(error));

db.on('open', () => console.error(`connected to the database`));
