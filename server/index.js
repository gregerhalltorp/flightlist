require('babel-register', {
  ignore: /node_modules\/(?!app)/,
  presets: [
    'es2015',
    'stage-2',
  ],
});

require('./server');
