var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {

	res.sendFile(path.join(__dirname, "home.html"));

});

app.get("/survey", function(req, res) {

	res.sendFile(path.join(__dirname, "survey.html"));

});