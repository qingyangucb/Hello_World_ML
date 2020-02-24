// Declare global variables for the two directions, sample size, and counter.
var dirX1;
var dirY1;
var dirX2;
var dirY2;
var D1 = [0,1];
var D2 = [0,-1];
var D1x = 0;
var D1y = 1;
var D2x = 0;
var D2y = -1;
var size;
var counter = 0;

initiatePlot1()


var thetas = generateThetas();
var thetas1 = thetas[0];
var thetas2 = thetas[1];
var thetas1N = normalize(thetas[0]);
var thetas2N = normalize(thetas[1]);
var thetas1x = thetas1[0];
var thetas1y = thetas1[1];
var thetas2x = thetas2[0];
var thetas2y = thetas2[1];
console.log(thetas1);
console.log(thetas2);
// console.log(thetas1x);
// console.log(thetas1y);
// console.log(thetas2x);
// console.log(thetas2y);

initiatePlot2(thetas1N,thetas2N)

// function to initiate the plots and samples
function initiate() {
	var directions = document.getElementById('directions').value;
	if (directions) {
		directions = directions.split(',');
	// console.log(directions);
	D1 = [directions[0],directions[1]];
	D2 = [directions[2],directions[3]];
	D1x = directions[0];
	D1y = directions[1];
	D2x = directions[2];
	D2y = directions[3];
	D1 = normalize(D1)
	D2 = normalize(D2)

	initiatePlot1(D1,D2)
}


	var size = document.getElementById('sampleSize').value;
	// console.log(size);
	var url = 'makeSamples/' + size + '/' 
				+ thetas1x + '/'+ thetas1y + '/' + thetas2x + '/' + thetas2y
				+ '/' + D1x + '/'+ D1y + '/' + D2x + '/' + D2y;
	d3.json(url).then(function(results) {
		// console.log(results);
	})
}

function trainOne() {
	var url = 'trainOne/' 
	d3.json(url).then(function(results) {
	console.log(results);
})


}