var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/friends", function(req, res) {

	return res.json(friends);

});

app.post("/api/new", function(req, res) {

	var newFriend = req.body;

	friends.push(newFriend);

	res.json(newFriend);

});