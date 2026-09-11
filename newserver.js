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


// Ports are used to identify specific processes or services running on a server. When a server listens on a port, it means that it is waiting for incoming network requests directed to that port. Different ports can be used for different services, allowing multiple applications to run on the same server without interfering with each other. In this case, the server is listening on port 8080, which is commonly used for web servers and development purposes.
server.listen(8080, () => {
  console.log('Server is running successfully on port 8080');
});
