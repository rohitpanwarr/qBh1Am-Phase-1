'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = function() {
  var config = require('../config');
  
  var entryPoint = path.resolve(config.scripts.entries);
  var jsSrc = path.resolve(config.scripts.src);
  var jsDest = path.resolve(config.scripts.dest);
  
  var webpackConfig = {
    entry: entryPoint,
    output: {
      path: jsDest,
      filename: 'foundation.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }]
    }
  };
  return webpackConfig;
};
