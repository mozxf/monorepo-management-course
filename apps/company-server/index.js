const http = require('http');

console.log('Hello World');

const app = http.createServer(async (req, res) => {
  res.write(JSON.stringify({ message: 'Hello World, Node.JS Server' }));
  res.end();
});

app.listen(3001);
