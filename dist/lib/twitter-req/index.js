"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// if (process.env.NODE_ENV === 'development') {
//   // tslint:disable-next-line:no-console
//   console.log(process.env.SUPERSECRET);
// }
var twit_1 = __importDefault(require("twit"));
var security_headers_1 = __importDefault(require("../security-headers"));
var twitterClient = new twit_1.default({
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
});
var request = function (req, res) {
    var status = twitterClient.get('statuses/user_timeline', {
        count: 23,
        screen_name: 'basil_js',
    });
    security_headers_1.default.security.forEach(function (ele) {
        res.setHeader(ele.name, ele.value);
    });
    var resp = status.catch(function (err) {
        // console.log('caught error', err.stack);
        res.writeHead(200, { 'Content-Type': 'application/json' }); // http header
        res.write(JSON.stringify({ data: null })); // write a response
        res.end(); // end the response
    });
    resp.then(function (result) {
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
exports.default = request;
