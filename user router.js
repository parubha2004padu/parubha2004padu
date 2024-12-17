const express = require('express');
const router = express.Router();
const db = require('../db');

// Example: Get all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching users.');
    }
    res.json(results);
  });
});

module.exports = router;