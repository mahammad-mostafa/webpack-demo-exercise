const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  entry: './source/index.js',
  output: {
    clean: true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{ test: /\.css$/i, use: ['style-loader', 'css-loader'] }]
  },
  plugins: [new html({ template: './source/index.html' })]
};