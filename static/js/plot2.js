// Initialize a plot using north and south as the default directions.
function initiatePlot2(thetas1,thetas2) {
	var plotHeight = 425;
	var plotWidth = 550;


	var line1 = {

		x: [0,thetas1[0]],
		y: [0,thetas1[1]],
		name: 'Neuron 1',
		mode: 'lines',
		line: {
			color: '#E2281F',
			width: 2
		}
	};

	var line2 = {

		x: [0,thetas2[0]],
		y: [0,thetas2[1]],
		name: 'Neuron 2',
		mode: 'lines',
		line: {
			color: '#3C61EA',
			width: 2
		}
	};

	var layout = {

		autosize: false,
		width: plotWidth,
		height: plotHeight,
		hovermode: !1,
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		margin: {
			l: 20,
			r: 20,
			b: 20,
			t: 20,
		},
		legend: {
			// x: 1,
			// xanchor: 'right',
			// y: 1
		},
		xaxis: {
			autorange: false,
			range: [-1.15, 1.15],
			showgrid: false,
			zeroline: true,
			showline: false,
			// autotick: false,
			// ticks: 'outside',
			// tick0: 0,
			// dtick: .5,
			showticklabels: false
		},
		yaxis: {
			autorange: false,
			range: [-1.15, 1.15],
			showgrid: false,
			zeroline: true,
			showline: false,
			// autotick: false,
			// ticks: 'outside',
			// tick0: 0,
			// dtick: .5,
			showticklabels: false
		},
		font: {
			family: 'sans-serif',
			size: 10,
			color: '#FFFFFF'
		},
	};



	var data = [line1, line2];

	Plotly.newPlot('plot2', data, layout);


}



// Initialize a plot using north and south as the default directions.
function updatePlot2(thetas1, thetas2, xy) {
	var plotHeight = 425;
	var plotWidth = 550;

	var line1 = {

		x: [0,thetas1[0]],
		y: [0,thetas1[1]],
		name: 'Neuron 1',
		mode: 'lines',
		line: {
			color: '#E2281F',
			width: 2
		}
	};

	var line2 = {

		x: [0,thetas2[0]],
		y: [0,thetas2[1]],
		name: 'Neuron 2',
		mode: 'lines',
		line: {
			color: '#3C61EA',
			width: 2
		}
	};

	var line3 = {

		x: [0,xy[0]],
		y: [0,xy[1]],
		name: 'Sample',
		mode: 'lines',
		line: {
			color: '#FFFF00',
			width: 2
		}
	};

	var shadow1 = thetas1[0]*xy[0]+thetas1[1]*xy[1];
	var shadow2 = thetas2[0]*xy[0]+thetas2[1]*xy[1];
	var shadow1x = shadow1*thetas1[0];
	var shadow1y = shadow1*thetas1[1];
	var shadow2x = shadow2*thetas2[0];
	var shadow2y = shadow2*thetas2[1];

	var name1 = 'Right Direction';
	var name2 = 'Wrong Direction';

	if (shadow1<shadow2) {

		name1 = 'Wrong Direction';
		name2 = 'Right Direction';
	}

	var line4 = {

		x: [0,shadow1x,xy[0]],
		y: [0,shadow1y,xy[1]],
		name: `${name1}`,
		mode: 'lines',
		line: {
			dash: 'dot',
			color: '#E2281F',
			width: 2
		}
	};

	var line5 = {

		x: [0,shadow2x,xy[0]],
		y: [0,shadow2y,xy[1]],
		name: `${name2}`,
		mode: 'lines',
		line: {
			dash: 'dot',
			color: '#3C61EA',
			width: 2
		}
	};

	var layout = {

		autosize: false,
		width: plotWidth,
		height: plotHeight,
		hovermode: !1,
		paper_bgcolor: 'rgba(0,0,0,0)',
		plot_bgcolor: 'rgba(0,0,0,0)',
		margin: {
			l: 20,
			r: 20,
			b: 20,
			t: 20,
		},
		legend: {
			// x: 1,
			// xanchor: 'right',
			// y: 1
		},
		xaxis: {
			autorange: false,
			range: [-1.15, 1.15],
			showgrid: false,
			zeroline: true,
			showline: false,
			// autotick: false,
			// ticks: 'outside',
			// tick0: 0,
			// dtick: .5,
			showticklabels: false
		},
		yaxis: {
			autorange: false,
			range: [-1.15, 1.15],
			showgrid: false,
			zeroline: true,
			showline: false,
			// autotick: false,
			// ticks: 'outside',
			// tick0: 0,
			// dtick: .5,
			showticklabels: false
		},
		font: {
			family: 'sans-serif',
			size: 10,
			color: '#FFFFFF'
		},
	};



	var data = [line1, line2, line3, line4, line5];

	Plotly.newPlot('plot2', data, layout);

}
