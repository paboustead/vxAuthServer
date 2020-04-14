const https = require('https');
const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;
const fs = require('fs')

const server = http.createServer(app);

// For HTTPS token server
/* const server = https.createServer({
  key: fs.readFileSync('REPLACE WITH PATH TO privkey.pem'),
  cert: fs.readFileSync('REPLACE WITH PATH TO fullchain.pem')
},app); */

server.listen(port);


