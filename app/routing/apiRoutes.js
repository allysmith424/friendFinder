var path = require("path");

var friends = require("../data/friends.js")

var bestMatch;


module.exports = function(app) {

	app.get("/api/friends", function(req, res) {

		return res.json(friends);

	});

	app.post("/api/new", function(req, res) {

		var newFriend = req.body;

		function compare(friend1, friend2) {

			var total = 0;

			for (var key in friend2) {

				if (!isNaN(friend2[key]) && key !== "total") {

					total += Math.abs(parseInt(friend2[key]) - parseInt(friend1[key]));

				}

			}

			friend2.total = total;

		};

		function compareLoop() {

			for (var i = 0; i < friends.length; i++) {

				friends[i].total = 0;

			}

			for (var i = 0; i < friends.length; i++) {

				compare(newFriend, friends[i]);

			}

		};

		function findMatch() {

			var currentBest = 1000000;

			for (var i = 0; i < friends.length; i++) {

				if (friends[i].total < currentBest) {

					currentBest = friends[i].total;

					bestMatch = friends[i];

				}

			}

		};

		compareLoop();

		findMatch();

		friends.push(newFriend);

		res.json(bestMatch);

	});

};