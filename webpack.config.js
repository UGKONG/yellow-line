const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.vue', '.js', '.ts']
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/i, exclude: /node_modules/, use: ['vue-loader']
      }, {
        test: /\.js$/i, exclude: /node_modules/, use: ['babel-loader']
      }, {
        test: /\.(avi|mp4|wav|webm)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: './public/videos',
            name: '[name].[ext]'
          }
        }]
      }, {
        test: /\.(png|jpg|gif|bmp|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: './public/images',
            name: '[name].[ext]'
          }
        }]
      }, {
        test: /\.(c|sa|sc)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.html$/i, use: ['html-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true
  }
}
