var express = require("express");
var path = require("path");

var app = express();
var port = 9090,
    publicPath = path.resolve(__dirname, "public");

var httpProxy = require("http-proxy"),
    proxy = httpProxy.createProxyServer();

app.use(express.static(publicPath));

var bundle = require("./server/bundle.js");
bundle();


app.get("/str", function(req, resp) {
    resp.send("Expres && webpack");
})

//setProxy for all the urls from localhost:9090/build
app.all("/build/*", function(req, resp) {
    proxy.web(req, resp, {
        target: "http://localhost:8080"
    });
});

//Catch proxy erros
proxy.on("error", function(e) {
    console.log("Could not connect to proxy. Try again!!");
    console.log(e);
});

app.listen(port, function() {
    console.log("Server running on " + port);
});
