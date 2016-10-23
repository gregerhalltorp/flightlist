var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: [path.join(__dirname, '/client/index.js')],

  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'app.js',
    publicPath: 'http://localhost:8080/public',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-2', 'react'],
      },
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, './app/styles')),
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'CLIENT': JSON.stringify(true),
        'INCLUDE_STYLES': JSON.stringify(true),
      },
    }),
    new ExtractTextPlugin('app.css'),
  ],
};
