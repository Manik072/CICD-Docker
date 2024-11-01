const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

const app = express();

app.use(express.json());

dotenv.config()

// connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, CD/CD pipline' });
});

console.log("Welcome to the First CI/CD pipeline for Node.js application! in Docker Registry")



app.listen(process.env.PORT, () => {
    console.log('Server is running on'+process.env.PORT);
})