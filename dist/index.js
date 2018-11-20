"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV === 'development') {
    dotenv_1.default.config();
}
var twitter_req_1 = __importDefault(require("./lib/twitter-req"));
module.exports = twitter_req_1.default;
// export default twreq;
