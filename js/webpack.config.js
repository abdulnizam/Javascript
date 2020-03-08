const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, './source2.jsx'),
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    rules:[
      {
        test: /\jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
