// Create a server file, inside the file create a http server
// That server should listen on any port of your choice
// That server is gonna have 3 routes, users, posts & health
// Whenerver the client sends a request to the server, it should be able to recieve a response from the server, 
// The request to the health route should return a successful json obeject  
// Tip: Create an array of post objects and user objects
// The user route should return all the the available users, and the posts route should return all the available posts 

const http = require('http');

// Array of post objects
const posts = [{ title: 'First Post', content: 'He\'s a cheeky boy' }, { title: 'Second Post', content: 'He has a big head' },
];

const users = [{ name: 'Sola', age: 30 }, { name: 'Kachi', age: 25 },];

const server = http.createServer((req, res) => {
  const requestedUrl = req.url;
  const requestedMethod = req.method;

  if (requestedMethod === 'GET') {
    if (requestedUrl === '/health') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ success: 'Server is healthy' }));
    }

    if (requestedUrl === '/users') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(users));
    }

    if (requestedUrl === '/posts') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(posts));
    }
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify({ error: 'Route doesn\'t exist' }));
});

server.listen(8282, () => {
  console.log('Server is running successfully on port 8282');
});