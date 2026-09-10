const http = require('http');

const server = http.createServer((req, res) => {
    const requestedUrl = req.url;
    const requestedMethod = req.method; 

    if ( requestedMethod === 'GET'){
      if(requestedUrl === '/health') {
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'application/json');
        body: JSON.stringify({ success: 'Server is healthy' });
        return res.end(JSON.stringify({ success: 'Server is healthy' }));
      }
    } 
    res.statusCode = 404; // Not Found
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: 'Root doesnt exist' })); 
})
// We usee GET because a URL is put in a browser and the browser sends a GET request to the server. The server then responds with the requested resource or data.
// what all response must have status code
server.listen(8080, () => {
  console.log('Server is running successfully on port 8080');
});
