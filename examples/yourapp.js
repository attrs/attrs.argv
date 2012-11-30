var argv = require('../attrs.argv.js');

	var port = argv.port;
	var y = argv.y;
	var a = argv.a;
	var b = argv.b;
	var c = argv.c;
	var d = argv.d;
	var key = argv.key;
	var single = argv.single;

	//console.log('process.argv', process.argv);		//original process.argv array
	console.log('argv', argv);		//print argv object
	console.log('port', port);		//8080
	console.log('y', y);			//true (boolean)
	console.log('a', a);			//1
	console.log('b', b);			//2
	console.log('c', c);			//this is c
	console.log('d', d);			//d
	console.log('key', key);		//value
	console.log('single', single);		//true (boolean)