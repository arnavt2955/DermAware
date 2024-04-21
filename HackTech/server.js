const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from http://localhost:19000
app.use(cors({
  origin: 'http://localhost:19000'
}));

// Define your routes and middleware here...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

