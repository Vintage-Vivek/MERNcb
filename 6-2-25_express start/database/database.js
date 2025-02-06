const mongoose = require('mongoose');

require('dotenv').config()

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.mongodbUrl);
        console.log('database connection established');
    }catch(err){
        console.log('failed', err);
        process.exit(1);
    }
}

module.exports = connectDB