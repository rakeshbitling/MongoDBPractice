const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/practicals', { useNewUrlParser:true });

const db = mongoose.connection;

// mongoose.set('debug',true);

db.on('error', (error) => console.error(error));

db.on('open', () => console.error(`connected to the database`));