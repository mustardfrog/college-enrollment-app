const express = require('express')
const path = require('path');
const cors = require('cors');
const router = require('./routes/api')

const bodyParser = require('body-parser');

const db = require('./db/db')

const app = express();

const port = 9000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))

app.get('/home', (req, res) => {
  res.send("hello from home");
})

// handle routes
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})

