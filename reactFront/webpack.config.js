module.exports = {
  entry: './src/App.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
    {
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: [
          ['@babel/plugin-proposal-class-properties', {'loose':true}]
        ]
      }
    },
    ]
  },
  devServer: {
    historyApiFallback: {
    index: 'index.html'
    },
    port: '3000'
  }
}