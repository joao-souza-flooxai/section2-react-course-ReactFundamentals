module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    contentBase: './public',
    port: 1000
  },
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
