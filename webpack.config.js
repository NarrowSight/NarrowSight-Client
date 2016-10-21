const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPluginConfig = new ExtractTextPlugin('./assets/style/css/style.css');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ['css', 'sass']
            }
        ]
    },

    "sass": {
        "includePaths": [
          "./node_modules/bourbon/app/assets/stylesheets",
          "./node_modules/bourbon-neat/app/assets/stylesheets"
        ]
      },

    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },

    plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};
