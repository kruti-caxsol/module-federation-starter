const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
  const {ModuleFederationPlugin} = require("webpack").container;
  const deps = require("../package.json").dependencies;
  const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
 
  output: {
      path: path.resolve(__dirname, '..', './build'),
      filename: 'bundle.js',
      publicPath: '/',
  },
  plugins: [
    // new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new ModuleFederationPlugin({
      name:'shellapp',
      remotes: {
        authapp: "authapp@http://localhost:8081/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "@mui/material": { singleton: true , eager:true, requiredVersion:deps['@mui/material'] },
        "@emotion/react": { singleton: true,eager:true, requiredVersion: deps["@emotion/react"] },
        "@emotion/styled": { singleton: true,eager:true, requiredVersion: deps["@emotion/styled"] },  
        // "react-router-dom":{ singleton: true , eager:true, requiredVersion:deps["react-router-dom"] },
        // "graphql":{ singleton: true , eager:true, requiredVersion:deps["graphql"] },
        // "@apollo/client":{ singleton: true , eager:true, requiredVersion:deps["@apollo/client"] },
      },
    })
  ],
  stats: 'errors-only',
}
