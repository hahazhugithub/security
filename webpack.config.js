var webpack = require('webpack');
var path = require('path');

module.exports = function (env) {
    return {
        devtool: "cheap-source-map",
        entry: {
            main: './client/index.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
             new webpack.optimize.UglifyJsPlugin({
                sourceMap: true
            })
        ]
    }
}