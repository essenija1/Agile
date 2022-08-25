const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: __dirname + "/src/app/index.js", 
  output: {
    path: __dirname + '/dist', 
    filename: 'bundle.js',  
    publicPath: '/' 
  },
  module: {  
      rules: [ 
      ]
  },
  plugins: [  
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      })
  ],
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.join(__dirname, './dist'),
    },
  },
};
