var express = require("express");
var path = require("path");

var app = express();
var port = 9090,
    publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.listen(port, function() {
    console.log("Server running on " + port);
});
