attrs.argv
===

### Usage:

Installation:

	$ npm install attrs.argv

Execute your app with process parameter:

	$ node yourapp.js --port="8080" a=1 -b='2' --c "this is c" -d d

Catch parameter in "yourapp.js":

	var argv = require('attrs.argv');
	
	var port = argv.port;
	var a = argv.a;
	var b = argv.b;
	var c = argv.c;
	var d = argv.d;

### Parameter formats:

	$ node yourapp.js -port 8080

	$ node yourapp.js --port 8080

	$ node yourapp.js -port=8080

	$ node yourapp.js --port=8080

	$ node yourapp.js port=8080

	$ node yourapp.js -port='8080'

	$ node yourapp.js --port="8080"

	$ node yourapp.js --port="8080" a=1 -b='2' --c "this is c" -d d

