const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

const cors = require('cors')
app.use(cors({
    origin:'*' // https://custom url phir bas wahi access kar payega
}))

const router = require('./routes/routes');
app.use('/api/v1', router);


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