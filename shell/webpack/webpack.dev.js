const webpack = require('webpack')
module.exports = {
    mode:'development',
    devtool:'cheap-module-source-map',
    // devServer: {
    //     historyApiFallback: true,
    //   },
    devServer: {
        historyApiFallback: true, // Enable history API fallback
        // contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        // port: 3000,
      },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.name':JSON.stringify('development'),
            'process.env.port':JSON.stringify(3000),
        }),
        // new ReactRefreshPlugin()
    ]
}