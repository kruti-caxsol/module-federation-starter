const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  // devServer: {
  //     historyApiFallback: true,
  //   },
  devServer: {
    historyApiFallback: true, // Enable history API fallback
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // port: 3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("development"),
      "process.env.port": JSON.stringify(3000),
    }),
    new ESLintPlugin(),
    // new ReactRefreshPlugin()
  ],
};
