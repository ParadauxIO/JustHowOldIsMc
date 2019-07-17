var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/maintenance');
});

app.get("/:version", function(req, res) {
	res.render('pages/maintenance');
});

app.get("/api/v1/:version", function(req, res) {
	res.json({"error": "API is in maintenance mode, sorry. {AUTHENTICATION REQUIRED}"})
});

app.listen(1339);