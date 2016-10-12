var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './src/app.js',
  output: { path: __dirname + '/src/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node-modules|bower_components)/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
};﻿

module.exports = config;
