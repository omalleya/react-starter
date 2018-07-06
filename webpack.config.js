var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  performance: {
    hints: false,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  performance: { hints: false },
  devServer: {
    contentBase: path.resolve(__dirname, "./")
  }
};
