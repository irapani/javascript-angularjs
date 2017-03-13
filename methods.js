var methods = {};

methods.updateServer = function() {
	console.log('Important function');
};

methods.eatCookies = function() {
	console.log('Chocolate eatCookies')
}

methods.node = function() {
	console.log('NodeJS, is Awesome');
}

exports.data = methods;

methods.sumNumber(a,b) {
	return a+b;
}

methods.circleCircumference(radius) {
	output = 2 * Math.PI * radius
	return output;
}

exports.output = output;