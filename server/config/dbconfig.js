const mongoose = require('mongoose');
const dbURL = process.env.DB_URL;

const connectDB = async() => {
    try {
        await mongoose.connect(dbURL);
        console.log('DB connected successfully');
    } catch (err){
        console.log(err);
    }
}

module.exports = connectDB;