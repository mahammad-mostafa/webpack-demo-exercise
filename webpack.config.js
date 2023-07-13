const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new html({ template: './src/index.html' })]
};