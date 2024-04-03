const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const path = require('path')

module.exports = {
    mode:'development',
    devtool:'cheap-module-source-map',
    devServer: {
        historyApiFallback: true, 
      },
    plugins:[
        new Dotenv({
            path:  path.resolve(__dirname, '..', './.env.development'),
            systemvars: true, 
          }),
        new webpack.DefinePlugin({
            'process.env.name':JSON.stringify('development'),
            'process.env.port':JSON.stringify(3000),
        }),
    ]
}