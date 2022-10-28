const path = require('path');
const fs = require('fs');
const http = require('http');

const getContentType = (url) => {
  const ext = path.extname(url);
  switch (ext) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.jpg':
      return 'image/jpg';
    case '.png':
      return 'image/png';
    default:
      return 'text/plain';
  }
}
const server = http.createServer((request, response) => {
  const filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
  let contentType = getContentType(filePath);
  let emptyPage = path.join(__dirname, 'public', '404.html');

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(emptyPage, 'utf8', (err, content) => {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end(content);
        });
      } else {
        response.writeHead(500);
        response.end('Server Error');
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content);
    }
  });
});

const port = 5000;

server.listen(port);

console.log(`Server is running on port ${port}`);
