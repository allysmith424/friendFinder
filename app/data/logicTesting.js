var friends = [

	{

		"name": "Vladimiras Hooper",
		"photo": "../public/images/ally.jpeg",
		"q1": 2,
		"q2": 3,
		"q3": 1,
		"q4": 4,
		"q5": 5,
		"q6": 3,
		"q7": 4,
		"q8": 2,
		"q9": 5,
		"q10": 4

	}, {

		"name": "Fern D'angelo",
		"photo": "../public/images/ally.jpeg",
		"q1": 3,
		"q2": 4,
		"q3": 2,
		"q4": 1,
		"q5": 1,
		"q6": 1,
		"q7": 4,
		"q8": 5,
		"q9": 5,
		"q10": 2

	}, {

		"name": "Catahecassa Rocca",
		"photo": "../public/images/ally.jpeg",
		"q1": 2,
		"q2": 4,
		"q3": 5,
		"q4": 1,
		"q5": 3,
		"q6": 3,
		"q7": 2,
		"q8": 1,
		"q9": 5,
		"q10": 2

	}, {

		"name": "Markus Sokal",
		"photo": "../public/images/ally.jpeg",
		"q1": 1,
		"q2": 4,
		"q3": 2,
		"q4": 3,
		"q5": 2,
		"q6": 1,
		"q7": 2,
		"q8": 3,
		"q9": 4,
		"q10": 4

	}, {
		"name": "Zephania Lee",
		"photo": "../public/images/ally.jpeg",
		"q1": 3,
		"q2": 2,
		"q3": 3,
		"q4": 4,
		"q5": 5,
		"q6": 5,
		"q7": 4,
		"q8": 2,
		"q9": 1,
		"q10": 1

	}, {

		"name": "Orpheus Chilikov",
		"photo": "../public/images/ally.jpeg",
		"q1": 2,
		"q2": 3,
		"q3": 4,
		"q4": 2,
		"q5": 1,
		"q6": 2,
		"q7": 1,
		"q8": 2,
		"q9": 5,
		"q10": 4

	}, {

		"name": "Trevor Solberg",
		"photo": "../public/images/ally.jpeg",
		"q1": 3,
		"q2": 4,
		"q3": 4,
		"q4": 3,
		"q5": 1,
		"q6": 2,
		"q7": 3,
		"q8": 5,
		"q9": 5,
		"q10": 2

	}, {

		"name": "Lucretia Janzen",
		"photo": "../public/images/ally.jpeg",
		"q1": 3,
		"q2": 3,
		"q3": 4,
		"q4": 5,
		"q5": 3,
		"q6": 2,
		"q7": 3,
		"q8": 4,
		"q9": 5,
		"q10": 1

	}, {

		"name": "Iona Begbie",
		"photo": "../public/images/ally.jpeg",
		"q1": 2,
		"q2": 4,
		"q3": 3,
		"q4": 1,
		"q5": 2,
		"q6": 5,
		"q7": 4,
		"q8": 3,
		"q9": 5,
		"q10": 5

	}, {

		"name": "Finnur Hayden",
		"photo": "../public/images/ally.jpeg",
		"q1": 1,
		"q2": 3,
		"q3": 4,
		"q4": 4,
		"q5": 5,
		"q6": 2,
		"q7": 5,
		"q8": 5,
		"q9": 2,
		"q10": 3

	}

];

function compare(friend1, friend2) {

	var total = 0;

	for (var key in friend2) {

		if (!isNaN(friend2[key])) {

			total += Math.abs(parseInt(friend2[key]) - parseInt(friend1[key]));

		}

	}

	friend2.total = total;

}

function compareLoop() {

	for (var i = 0; i < friends.length; i++) {

		friends[i].total = 0;

	}

	for (var i = 1; i < friends.length; i++) {

		compare(friends[0], friends[i]);

	}

}

function findMatch() {

	var currentBest = 1000000;
	var bestMatch;

	for (var i = 1; i < friends.length; i++) {

		console.log(friends[i].name + ": " + friends[i].total);

		if (friends[i].total < currentBest) {

			currentBest = friends[i].total;

			bestMatch = friends[i];

		}

	}

	console.log(bestMatch.name);

}

compareLoop();

findMatch();






