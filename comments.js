// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const comments = require('./comments');
// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// POST /comments
app.post('/comments', (req, res) => {
  const { author, content } = req.body;
  comments.addComment(author, content);
  res.status(201).end();
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});