const path = require("path");

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: "./lib/flappy-bars.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "./bundle.js",
    publicPath: 'dist'
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, ''), // Root directory
      },
      {
        directory: path.join(__dirname, 'assets'), // Assets folder
      },
    ],
},

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", "*"]
  }
};