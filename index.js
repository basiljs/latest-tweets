if (process.env.NODE_ENV === 'development') {

  const dotenv = require('dotenv');
  dotenv.config();
}

const http = require('http');
const secHeaders = require('./lib/security-headers');
console.log(process.env.SUPERSECRET);

const Twit = require('twit');

const twitterClient = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY, // eslint-disable-line camelcase
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET, // eslint-disable-line camelcase
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY, // eslint-disable-line camelcase
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET // eslint-disable-line camelcase
});

const server = http.createServer(function (req, res) {
  let status = twitterClient.get(
    'statuses/user_timeline',
    {
      screen_name: 'basil_js', // eslint-disable-line camelcase
      count: 23
    });

  secHeaders.security.forEach((ele) => {
    res.setHeader(ele.name, ele.value);
  });

  status.catch(function (err) {
    console.log('caught error', err.stack);
    res.writeHead(200, { 'Content-Type': 'application/json' }); // http header
    res.write(JSON.stringify({ data: null })); //write a response
    res.end(); //end the response
  }).then(function (result) {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.
    // console.log('data', result.data);
    res.writeHead(200, { 'Content-Type': 'application/json' }); // http header
    res.write(JSON.stringify({ data: result.data })); //write a response
    res.end(); //end the response
  });


});


server.listen(3000, function () {
  console.log('server start at port 3000'); //the server object listens on port 3000
});
