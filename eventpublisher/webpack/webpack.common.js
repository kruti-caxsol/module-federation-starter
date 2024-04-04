const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("../package.json").dependencies;

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new ModuleFederationPlugin({
      name: "eventpublisher",
      filename: "remoteEntry.js",
      exposes: {
        "./DemoPubSub": path.resolve(
          __dirname,
          "..",
          "./src/components/DemoPubSub.tsx"
        ),
        "./Publisher": path.resolve(
          __dirname,
          "..",
          "./src/components/Publisher.tsx"
        ),
        "./Hoctest": path.resolve(
          __dirname,
          "..",
          "./src/components/Hoctest.tsx"
        ),
      },
      remotes: {
        services: "services@http://localhost:8085/remoteEntry.js",
        app1: "app1@http://localhost:8082/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
  stats: "errors-only",
};
