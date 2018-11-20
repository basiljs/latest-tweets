// @ts-nocheck
const dotenv = require('dotenv');
const path = require('path');
// if (process.env.NODE_ENV === 'development') {
// console.log(path.resolve(process.cwd(), '.env'));
process.env.NODE_ENV = 'development';
dotenv.config({path: `${path.resolve(process.cwd(), '.env')}`});
// }

// const twreq = require('../dist/lib/twitter-req/index.js');
const twreq = require('../dist/index.js');
const http = require('http');

// if (process.env.NODE_ENV === 'development') {
//   console.log(process.env.SUPERSECRET);
// }

const server = http.createServer(twreq);

server.listen(3000,  () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('server start at port http://localhost:3000'); // the server object listens on port 3000
  }
});

