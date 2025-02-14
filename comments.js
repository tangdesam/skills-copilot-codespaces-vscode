// create web server
const express = require('express');
const app = express();
// import body-parser
const bodyParser = require('body-parser');
// import comments
const comments = require('./comments');

// use body-parser
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const { body } = req;
  if (body.comment) {
    comments.push({
      id: comments.length + 1,
      comment: body.comment
    });
    res.json({ message: 'Comment added!' });
  } else {
    res.status(400).json({ message: 'Invalid request!' });
  }
});

// start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});