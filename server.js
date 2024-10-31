const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

const app = express();

app.use(express.json());

dotenv.config()

// connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!  dad' });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})