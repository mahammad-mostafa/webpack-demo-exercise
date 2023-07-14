const Path = require('path');
const Html = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './source/index.js',
  output: {
    clean: true,
    filename: 'main.js',
    path: Path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{ test: /\.css$/i, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [new Html({ template: './source/index.html' })],
};