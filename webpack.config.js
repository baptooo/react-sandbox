const loaders = require('./webpack.loaders')

module.exports = {
  entry: './client/index.js',
  output: {
    path: './',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3333,
  },
  module: {
    loaders,
  },
};