attrs.argv
===

### Usage:

Installation:

	$ npm install attrs.argv

Execute your app with process parameter:

	$ node yourapp.js --port="8080" -y a=1 -b='2' --c "this is c" -d d -single --key=value

Catch parameter in "yourapp.js":

	var argv = require('../attrs.argv.js');

	var port = argv.port;
	var y = argv.y;
	var a = argv.a;
	var b = argv.b;
	var c = argv.c;
	var d = argv.d;
	var key = argv.key;
	var single = argv.single;

	console.log('process.argv', process.argv);	//original process.argv array
	console.log('argv', argv);			//print argv object
	console.log('port', port);			//8080
	console.log('y', y);				//true (boolean)
	console.log('a', a);				//1
	console.log('b', b);				//2
	console.log('c', c);				//this is c
	console.log('d', d);				//d
	console.log('key', key);			//value
	console.log('single', single);			//true (boolean)



### Parameter formats:

	$ node yourapp.js -port 8080
 
	$ node yourapp.js --port 8080
 
	$ node yourapp.js -port=8080
 
	$ node yourapp.js --port=8080
 
	$ node yourapp.js port=8080
 
	$ node yourapp.js -port='8080'
 
	$ node yourapp.js --port="8080"
 
	$ node yourapp.js --port="8080" a=1 -b='2' --c "this is c" -d d -single

