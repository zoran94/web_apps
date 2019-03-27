const figlet = require("figlet");
const http = require('http');

const text = figlet.textSync('sdfsfsdfsdf!', {
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default'
});

const hostname = '127.0.0.1';
const port = 3005;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(text);
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
