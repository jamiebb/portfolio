const common = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
  ],
});
