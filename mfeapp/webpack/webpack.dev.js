const webpack = require('webpack')
module.exports = {
    mode:'development',
    devtool:'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
      },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.name':JSON.stringify('development'),
            'process.env.port':JSON.stringify(3000),
        }),
    ]
}