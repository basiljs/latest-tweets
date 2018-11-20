import http from 'http';
import secHeaders from '../security-headers';
// if (process.env.NODE_ENV === 'development') {
//   // tslint:disable-next-line:no-console
//   console.log(process.env.SUPERSECRET);
// }
import Twit, { PromiseResponse } from 'twit';

const twitterClient = new Twit({
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY as string, // eslint-disable-line camelcase
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string, // eslint-disable-line camelcase
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string, // eslint-disable-line camelcase
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string, // eslint-disable-line camelcase
});

const request = (req: http.IncomingMessage, res: http.ServerResponse) => {
  const status = twitterClient.get(
    'statuses/user_timeline',
    {
      count: 23,
      screen_name: 'basil_js', // eslint-disable-line camelcase
    });

  secHeaders.security.forEach((ele: any) => {
    res.setHeader(ele.name, ele.value);
  });

  const resp = status.catch((err) => {
    // console.log('caught error', err.stack);
    res.writeHead(200, { 'Content-Type': 'application/json' }); // http header
    res.write(JSON.stringify({ data: null })); // write a response
    res.end(); // end the response
  });

  resp.then((result: any) => {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.
    // console.log('data', JSON.stringify({ data: result.data }));
    res.writeHead(200, { 'Content-Type': 'application/json' }); // http header
    res.write(JSON.stringify({ data: result.data })); // write a response
    res.end(); // end the response
  });
};

export default request;
