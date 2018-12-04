const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, './src/index.html'),
  filename: './index.html'
});

module.exports = {
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: [htmlPlugin],
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
    background: path.resolve(__dirname, './src/background.js'),
    bot: path.resolve(__dirname + '/src/bot.js'),
    pay: path.resolve(__dirname + '/src/pay.js')
  }
};