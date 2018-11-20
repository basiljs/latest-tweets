// taken from this sto
// How to Implement Helmet Into a Node Server? [w/o Express]
// https://stackoverflow.com/a/34320684/1770432

const data = {
  security: [
    { name:  'Cache-Control',
      value: 'public, max-age=30672000',
    },
    { name:   'server',
      value:  'mySpecial-Server',
    },
    { name:   'Strict-Transport-Security',
      value:  'max-age=86400',
    },
    { name:   'X-Content-Type-Options',
      value:  'nosniff',
    },
    { name:   'X-Frame-Options',
      value:  'DENY',
    },
    { name:   'X-Powered-By',
      value:  'Awesomeness',
    },
    { name:   'X-XSS-Protection',
      value:  '1; mode=block',
    },
    { name:   'Access-Control-Allow-Origin',
      value:  '*', // needs to be like this for now
    },
  ],
};
export default data;
