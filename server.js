var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "app/public")));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(port, function() {

	console.log("App listening on PORT " + port);

});