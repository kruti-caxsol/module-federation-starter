const webpack = require("webpack");
module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("production"),
      "process.env.port": JSON.stringify(3000),
    }),
  ],
};
