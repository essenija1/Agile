const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = ['caloriesCounter', 'kbjy', 'meditation', 'menuScheduler', 'registration'];

module.exports = {
  context: path.join(__dirname, 'src'),
  mode: 'development',
  entry: {
    '': './index.js',
    ...pages.reduce((config, page) => {
      config[page] = `./pages/${page}/index.js`;
      return config;
    }, {}),
  },
  output: {
    filename: '[contenthash].js',
    path: path.join(__dirname, 'public'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          filename: `${page}.html`,
          template: `./pages/${page}/${page}.html`,
          chunks: [page],
        })
    ),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `./index.html`,
      chunks: [''],
    }),
    // new HtmlWebpackPlugin({
    //     filename: "index.html",
    //     template: "./index.html",
    // }),
    // new HtmlWebpackPlugin({
    //     filename: "meditation/index.html",
    //     template: "./meditation/index.html",
    // }),
    // new HtmlWebpackPlugin({
    //     filename: "registration/index.html",
    //     template: "./registration/index.html",
    // }),
    // new HtmlWebpackPlugin({
    //     filename: "kbjy/index.html",
    //     template: "./kbjy/index.html",
    // }),
    // new HtmlWebpackPlugin({
    //     filename: "menuScheduler/index.html",
    //     template: "./menuScheduler/index.html",
    // }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'public/assets'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
