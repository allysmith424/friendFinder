var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "app/public")));

var friends = [];

app.get("/", function(req, res) {

	res.sendFile(path.join(__dirname, "app/public/home.html"));

});

app.get("/survey", function(req, res) {

	res.sendFile(path.join(__dirname, "app/public/survey.html"));

});

app.get("/api/friends", function(req, res) {

	return res.json(friends);

});

app.post("/api/new", function(req, res) {

	var newFriend = req.body;

	friends.push(newFriend);

	res.json(newFriend);

	console.log(friends);

});

app.listen(port, function() {

	console.log("App listening on PORT " + port);

});