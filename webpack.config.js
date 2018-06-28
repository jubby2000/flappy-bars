const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/flappy-bars.js",
  output: {
    path: path.join(__dirname),
    filename: "./lib/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
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