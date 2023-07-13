const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.css$/i, use: ['style-loader', 'css-loader'] }]
  },
  plugins: [new html({ template: './src/index.html' })]
};