// taken from this sto
// How to Implement Helmet Into a Node Server? [w/o Express]
// https://stackoverflow.com/a/34320684/1770432

const data = {
  security: [
    { name:  'Cache-Control',
      value: 'public, max-age=30672000'
    },
    { name:   'server',
      value:  'mySpecial-Server'
    },
    { name:   'Strict-Transport-Security',
      value:  'max-age=86400'
    },
    { name:   'X-Content-Type-Options',
      value:  'nosniff'
    },
    { name:   'X-Frame-Options',
      value:  'DENY'
    },
    { name:   'X-Powered-By',
      value:  'Awesomeness'
    },
    { name:   'X-XSS-Protection',
      value:  '1; mode=block'
    },
    { name:   'Access-Control-Allow-Origin',
      value:  '*' // needs to be like this for now
    },
    // ,
    // { name:   'Content-Security-Policy',
    //   value:  "default-src 'none'; script-src 'self' https://cdnjs.cloudflare.com connect-src 'self'; img-src 'self' data:; style-src 'self' https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com; manifest-src 'self'"
    // }
  ]
};

// let origins = ['https://basiljs.github.io', 'http://basiljs.ch'];
// if (process.env.NODE_ENV === 'development')  {
//   origins = ['http://127.0.0.1:4000'];
// }

// origins.forEach(element => {
//   data.security.push({
//     name: 'Access-Control-Allow-Origin',
//     value: element
//   });
// });

module.exports = data;
