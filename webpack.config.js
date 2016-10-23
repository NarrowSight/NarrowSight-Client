const path = require('path');

const PATHS = {
    app: path.join(__dirname, './app/index'),
    html: path.join(__dirname, './app/index.html'),
    build: path.join(__dirname, 'build'),
    style:
        [
            path.join(__dirname, './app/assets/style/scss'),
            path.join(__dirname, './node_modules/bourbon/app/assets/stylesheets'),
            path.join(__dirname, './node_modules/bourbon-neat/app/assets/stylesheets')
        ]
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPluginConfig = new ExtractTextPlugin('./build/assets/css/style.css');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: PATHS.html,
    filename: 'index.html',
    inject: 'body',
    title: 'NarrowSight'
});


const webpackConfig = {
    entry: PATHS.app,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['style', 'css', 'sass']),
                include: PATHS.style
            }
        ]
    },

    output: {
        path: PATHS.build,
        filename: 'transformed.js'
    },

    plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};

module.exports = webpackConfig;
