const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "assets"),
  entry: "./src/index.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "assets/dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "assets/src/index.html"),
      inject: "body",
    }),
      new CopyWebpackPlugin({
        patterns: [
            {
            from: path.resolve(__dirname, "assets/src/images"),
            to: path.resolve(__dirname, "assets/dist/images"),
            },
        ],
      })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "assets/dist"),
    },
    compress: true,
    port: 9010,
    hot: true, // Hot Module Replacement etkin
    open: true,
    watchFiles: ["assets/src/**/*"], // src klasöründeki dosya değişikliklerini izler
  },
  watchOptions: {
    ignored: /node_modules/, // node_modules izlenmesin
    poll: 1000, // Değişiklikler her saniyede bir kontrol, edilir
  },
};
