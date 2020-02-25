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
var tableCounter = 0;
var delta = 0;
var x;
var y;

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
	var url = 'trainOne' 
	d3.json(url).then(function(results) {
		// console.log(results)
		delta = results[0];
		tempA = results[1];
		tempError = results[2];
		ans = results[3];
		// console.log(ans[0]);
		// console.log(tempA[0][0]);
		x = results[4];
		y = results[5];
		xy = [x,y]	
		thetas1x += delta[0][0];
		thetas1y += delta[0][1];
		thetas1 = [thetas1x, thetas1y]
		thetas2x += delta[1][0];
		thetas2y += delta[1][1];
		thetas2 = [thetas2x, thetas2y]
		// console.log(`delta is ${delta}`)
		// console.log(`delta00 is ${delta[0][0]}`)
		// console.log(`delta01 is ${delta[0][1]}`)
		// console.log(`delta10 is ${delta[1][0]}`)
		// console.log(`delta11 is ${delta[1][1]}`)

		// round them so they look nice in the table
		var xR = x.toFixed(2);
		var yR = y.toFixed(2);
		var xyR = [xR,yR];
		var thetas1xR = thetas1x.toFixed(2);
		var thetas1yR = thetas1y.toFixed(2);
		var thetas1R = [thetas1xR, thetas1yR];
		var thetas2xR = thetas2x.toFixed(2);
		var thetas2yR = thetas2y.toFixed(2);
		var thetas2R = [thetas2xR, thetas2yR];

		var tempA1R = tempA[0][0].toFixed(2)+'%';
		var tempA2R = tempA[0][1].toFixed(2)+'%';
		var tempAR = [tempA1R, tempA2R];



		for (var i = 0; i < 5; i++) {
		  document.getElementById(`xy${i}`).style="color:#FFFFFF";
		  document.getElementById(`p${i}`).style="color:#FFFFFF";
		  document.getElementById(`a${i}`).style="color:#FFFFFF";
		  document.getElementById(`m${i}`).style="color:#FFFFFF";
		  document.getElementById(`n${i}`).style="color:#FFFFFF";
		}

		
// print current values to table
		document.getElementById(`xy${tableCounter}`).innerHTML = xyR;
		document.getElementById(`xy${tableCounter}`).style="color:#FFFF00";
		document.getElementById(`p${tableCounter}`).innerHTML = tempAR;
		document.getElementById(`p${tableCounter}`).style="color:#FFFF00";
		document.getElementById(`a${tableCounter}`).innerHTML = ans;
		document.getElementById(`a${tableCounter}`).style="color:#FFFF00";
		document.getElementById(`m${tableCounter}`).innerHTML = thetas1R;
		document.getElementById(`m${tableCounter}`).style="color:#FFFF00";
		document.getElementById(`n${tableCounter}`).innerHTML = thetas2R;
		document.getElementById(`n${tableCounter}`).style="color:#FFFF00";
		tableCounter += 1
		if (tableCounter ==5) {
			tableCounter = 0;
		}
		updatePlot1(D1,D2,normalize(xy));
		updatePlot2(normalize(thetas1),normalize(thetas2),normalize(xy));
		})


}

// function trainAll() {
// 	var url = 'trainAll' 
// 	d3.json(url).then(function(results) {
// 		// console.log(results)
// 		delta = results[0];
// 		tempA = results[1];
// 		tempError = results[2];
// 		ans = results[3];
// 		console.log(ans[0]);
// 		console.log(tempA[0][0]);
// 		x = results[4];
// 		y = results[5];
// 		xy = [x,y]	
// 		thetas1x += delta[0][0];
// 		thetas1y += delta[0][1];
// 		thetas1 = [thetas1x, thetas1y]
// 		thetas2x += delta[1][0];
// 		thetas2y += delta[1][1];
// 		thetas2 = [thetas2x, thetas2y]
// 		// console.log(`thetas1x is ${thetas1x}`)
// 		// console.log(`delta00 is ${delta[0][0]}`)
// 		// console.log(`thetas1 is ${thetas1}`)
// 		var xR = x.toFixed(2);
// 		var yR = y.toFixed(2);
// 		var xyR = [xR,yR];
// 		var thetas1xR = thetas1x.toFixed(2);
// 		var thetas1yR = thetas1y.toFixed(2);
// 		var thetas1R = [thetas1xR, thetas1yR];
// 		var thetas2xR = thetas2x.toFixed(2);
// 		var thetas2yR = thetas2y.toFixed(2);
// 		var thetas2R = [thetas2xR, thetas2yR];

// 		var tempA1R = tempA[0][0].toFixed(2);
// 		var tempA2R = tempA[0][1].toFixed(2);
// 		var tempAR = [tempA1R, tempA2R];

		

// 		document.getElementById(`xy${tableCounter}`).innerHTML = xyR;
// 		document.getElementById(`p${tableCounter}`).innerHTML = tempAR;
// 		document.getElementById(`a${tableCounter}`).innerHTML = ans;
// 		document.getElementById(`m${tableCounter}`).innerHTML = thetas1R;
// 		document.getElementById(`n${tableCounter}`).innerHTML = thetas2R;
// 		tableCounter += 1
// 		if (tableCounter ==5) {
// 			tableCounter = 0;
// 		}

// 	})

// }