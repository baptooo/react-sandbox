const nodeExternals = require('webpack-node-externals');
const loaders = require('./webpack.loaders');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders,
  },
};
