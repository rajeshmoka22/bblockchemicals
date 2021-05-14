const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'
          // {
          //   loader: "style-loader"
          // },
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true,
          //     importLoaders: 1,
          //     localIdentName: "[name]_[local]_[hash:base64]",
          //     sourceMap: true,
          //     minimize: true
          //   }
          // }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      },
      // {
      //   test: /\.(gif|png|jpe?g)$/i,
      //   exclude: [/node_modules/],
      //   loaders: 'url-loader',
      //   options: {
      //     name: '[path][name].[ext]',
      //     context: path.resolve(__dirname, 'static/')
      //   }
      // }
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlWebpackPlugin]
};
