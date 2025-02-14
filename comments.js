// create web server that listens on port 3000
// when a request is made to the server, it will return a list of comments
// comments are stored in an array of objects
// each object has a name and a comment

// Load the http module to create an http server.
var http = require('http');

// Array of comments
var comments = [
  { name: 'John', comment: 'Hello World' },
  { name: 'Mary', comment: 'Hi there' },
  { name: 'Joe', comment: 'How are you?' }
];

// Configure our HTTP server to respond with an array of comments
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify(comments));
});

// Listen on port 3000, IP defaults to