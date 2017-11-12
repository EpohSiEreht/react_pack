const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  entry: [path.resolve(__dirname, 'src/index.js'), 'webpack-hot-middleware/client'],
  output: {
    filename: 'js/[name].bundle.js?v=[hash]',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: 'handlebars',
      },
    ],
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|svg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 2 } },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      title: 'React Pack',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template/index.html'),
      inject: false,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css?v=[hash]',
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
