const express = require('express');
const app = express();

require('dotenv').config();

const connectDB = require('./database/database');
 connectDB();

const port = process.env.PORT || 4000

app.get('/', (req, res) =>{
    res.send('welcome to backend')
});

app.listen(port, () => {
    console.log('Server is running on port' ,port);
});


console.log('hi');