const express = require('express');
const app = express();
const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

app.get('/search', (req, res) => {
  const userInput = req.query.name;  // User input directly from the query string
  
  // SQL query vulnerable to SQL Injection
  const query = `SELECT * FROM users WHERE name = '${userInput}'`;
  
  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
