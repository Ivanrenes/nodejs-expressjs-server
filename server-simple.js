const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('Hello WORLD')
});

server.listen(8000, () => {
    console.log('Server on port 8000');
})