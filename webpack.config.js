const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: './client/index.js',
  },
  output: {
    filename: "[name].js",
    path: path.resolve("public"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|tff|woff|woff2|mp4|mp3|wov)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 0,
    poll: 1000,
    ignored: "**/node_modules",
  },
};
