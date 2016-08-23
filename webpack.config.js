var webpack = require("webpack"),
    path = require("path");

var PATHS = {
    "app": path.resolve(__dirname, "app"),
    "build": path.resolve(__dirname, "public", "build")
};

var config = {
    devtool: "eval",
    entry: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', PATHS.app + "/app.js"],
    output: {
        path: PATHS.build,
        filename: "bundle.js",
        publicPath: "/build/"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url'
        }]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })]
};

module.exports = config;
