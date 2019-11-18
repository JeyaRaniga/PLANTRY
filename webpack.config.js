const path = require('path')

module.exports = {
  mode: 'development',
  entry: './Client/index.js',
  output: {
    path: path.join(__dirname, 'Public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
