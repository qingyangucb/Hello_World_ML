// Declare global variables for the two directions, sample size, and counter.
var dirX1;
var dirY1;
var dirX2;
var dirY2;
var size;
var counter = 0;

initiatePlot1()


var thetas = generateThetas();
var thetas1 = thetas[0];
var thetas2 = thetas[1];
var thetas1N = normalize(thetas[0]);
var thetas2N = normalize(thetas[1]);
console.log(thetas1);
console.log(thetas2);

initiatePlot2(thetas1N,thetas2N)