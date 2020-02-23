function generateThetas() {
	var a = 2*Math.random()-1;
	var b = 2*Math.random()-1;
	var c = 2*Math.random()-1;
	var d = 2*Math.random()-1;

	return [[a,b],[c,d]]
}

function normalize(x) {
	var a = Math.pow(x[0], 2);
	var b = Math.pow(x[1], 2);
	var l = Math.sqrt(a+b);

	return [x[0]/l,x[1]/l]

}