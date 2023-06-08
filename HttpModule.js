const http = require("http");

const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const aboutPage = readFileSync("./about.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutPage);
    res.end();
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(3500);

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('Hello, world!');
//   res.end();
// });

// const port = 3500;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// console.log('Server address:', server.address());
// console.log('Server timeout:', server.timeout);

// server.on('request', (req, res) => {
//   console.log('Request received');
// });

// server.on('connection', (socket) => {
//   console.log('Connection established');
// });

// server.on('close', () => {
//   console.log('Server closed');
// });
