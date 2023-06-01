const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// const connection = mongoose.connection;

// connection.once('open', function () {
//   console.log('MongoDB database connection established successfully');
// });

app.listen(3000, () => {
  console.log('server is running on port 4000');
});
