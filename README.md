[attrs.argv]
=================

[attrs.argv](https://npmjs.org/package/attrs.argv) is simple process parameter parser(process.argv or etc parameter array) for node.js


Usage
----------
+ **Installation** - `$ npm install attrs.argv`

+ **Execute your app with process parameter** - `$ node yourapp.js -port 8080`

+ **Catch parameter in `yourapp.js`** 
```
var argv = require('attrs.argv');
	
var port = argv.port;
```

+ **Supported parameter format**
`$ node yourapp.js -port 8080`
`$ node yourapp.js --port 8080`
`$ node yourapp.js -port=8080`
`$ node yourapp.js --port=8080`
`$ node yourapp.js port=8080`
`$ node yourapp.js -port='8080'`
`$ node yourapp.js --port="8080"`
`$ node yourapp.js --port="8080" a=1 -b='2' --c "this is c" -d d`

