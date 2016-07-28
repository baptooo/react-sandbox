/* eslint-disable max-len */

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react', 'stage-2'],
    },
  }, {
    test: /\.css$/,
    exclude: /node_modules/,
    loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  },
];
