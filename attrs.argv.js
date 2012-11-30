var parse = function( argv ) {
	if( !argv ) argv = process.argv;
	if( !(argv instanceof Array) ) throw new Error('argv parameter must be array.');
	var r = {};
	var escapeQuot = function(val) {
		if( val && (val.substring(0,1) == '\'' || val.substring(0,1) == '"') && (val.substring(val.length - 1) == '\'' || val.substring(val.length - 1) == '"') ) {
			val = val.substring(1, val.length - 1);
		}
		return val;
	};
	var sum = function(target, key, value) {
		if( value !== false && !value ) value = '';
		if( target[key] ) {
			if( !(target[key] instanceof Array) ) {
				target[key] = [target[key]];
			}

			target[key].push(value);
		} else {
			target[key] = value;
		}
	};

	for(var index=0; index < argv.length; index++) {
		var val = argv[index];
		var pos;
		if( val && val.substring(0,1) == '-' ) {
			var key = val.substring(1);
			var value;

			if( key.substring(0,1) == '-' ) {
				key = key.substring(1);
			}
			
			if( (pos = key.indexOf('=')) > 0 ) {
				value = key.substring(pos + 1);
				key = key.substring(0,pos);

				sum(r, key, escapeQuot(value));
			} else {
				value = argv[index + 1];
				
				if( !value || value.substring(0,1) == '-' || value.indexOf('=') > 0 ) {
					sum(r, key, true);
				} else {
					sum(r, key, escapeQuot(value));
					index = index + 1;
				}
			}
		} else if( (pos = val.indexOf('=')) > 0 ) {
			var value = val.substring(pos + 1);
			var key = val.substring(0,pos);

			sum(r, key, escapeQuot(value));
		} else {
			sum(r, val, true);
		}
	};

	return r;
}

var argv = parse();

argv.parse = function(argv) {
	parse(argv);
};

module.exports = argv;
