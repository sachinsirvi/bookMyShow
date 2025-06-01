const express = require('express');
const app = express();

require('dotenv').config(); // Import the dotenv library, and immediately run its config() function to load the .env file into process.env
// we can call require wherever we need it unlike import thingy in react that it has to be on top
const connectDB = require('./config/dbconfig');
connectDB();

app.listen(8082, ()=>{
    console.log('server is running on port 8082');
})
