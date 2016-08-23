var webpack = require("webpack"),
    webpackDevServer = require("webpack-dev-server"),
    webpackConfig = require("./../webpack.config.js");
var path = require("path"),
    fs = require("fs");

module.exports = function() {
    var buildStart = null;
    var compiler = webpack(webpackConfig);

    compiler.plugin("compile", function() {
        console.log("Building....");
        buildStart = Date.now();
    });

    compiler.plugin("done", function() {
        console.log("App builded in " + (Date.now() - buildStart) + "ms");
    });

    var bundler = new webpackDevServer(compiler, {
        contentBase: path.resolve(__dirname, "app"),
        publicPath: "/build/",
        hot: true,
        quiet: false,
        noInfo: true,
        // inline: true,
        // historyApiFallback: true,
        // progress: true,
        stats: {
            colors: true
        }
    });

    bundler.listen(8080, "localhost", function() {
        console.log("Building project with webpack dev server. Please wait....");
    });

};
