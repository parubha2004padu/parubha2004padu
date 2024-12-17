const express = require('express');
const db = require('./db');
const userRoutes = require('./api/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

// Serve static files
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});