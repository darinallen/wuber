const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname, // always run webpack from the root directory
  entry: './client/index.jsx', // the frontdoor to the project
  devtool: 'cheap-eval-source-map', // inline all source maps into the bundled code, won't be included in production
  output: {
    path: path.join(__dirname, 'public'), // ensures the correct public directory regardless of where webpack is called from the project
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true, // Make it a hot server
    publicPath: '/public/', // let webpack know where the bundle will be served from
    historyApiFallback: true // 404s will fallback to index.html
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  stats: {
    colors: true,
    reasons: true // Gives more useful errors
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Gives ability to make hot connectors
    new webpack.NamedModulesPlugin() // Sends down names of modules being hot replaced
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.jsx?$/, // run anything that ends in .js or .jsx
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
