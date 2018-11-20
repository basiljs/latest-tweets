import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}
import twreq from './lib/twitter-req';
export default twreq;
