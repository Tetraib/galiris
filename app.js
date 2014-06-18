var express = require("express"),
    app = express(),
    oneYear = 31557600000;
app.configure(function() {
    app.use(express.compress());
    app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
});
app.listen(process.env.PORT, process.env.IP);
//
// Routeur simple
app.get('/', function(req, res) {
    res.render("home.jade");
});