	// closer ex

/*var passed = 3;
var addTo = function () {
	var inner = 2;
	return passed + inner;
};

	console.dir(addTo);*/

	var passed = 4; 

	var addTo = function (passed){
		var add = function(inner){
			return passed + inner

		};
			return add;
	};
		console.dir(addTo(3)); 