const mongoose = require('mongoose')
const express = require('express')
const User = require('../db/models/User')
const path = require('path');

const router = express.Router();

// router.get('/', (req, res) => {
// })

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"))
})

router.post('/login', (req, res) => {
  const username = req.body.name;
  const password = req.body.password;

  User.find()
  .then(user => {res.json(user); console.log(user.name) })
  .catch((err) => console.log(err))

  if (username === 'user' && password === 'user') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }

  // User.create(req.body)
  //   .then(user => { res.json(user); console.log(user) })
  //   .catch((err) => console.log(err))
})

module.exports = router;
