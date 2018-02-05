var express = require('express'),
	app = express(),
	port = process.env.PORT || 3001,
	bodyParser = require('body-parser'),
	cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/productRoute');
routes(app);

app.listen(port);

console.log('Products RESTful API server is running on: ' + port);

module.exports = app;