// Initialize a plot using north and south as the default directions.
function initiatePlot1(thetas1 = [0,1],thetas2 = [0,-1]) {


	var line1 = {

		x: [0,thetas1[0]],
		y: [0,thetas1[1]],
		name: 'Direction 1',
		mode: 'lines',
		line: {
			color: '#E2281F',
			width: 2
		}
	};

	var line2 = {

		x: [0,thetas2[0]],
		y: [0,thetas2[1]],
		name: 'Direction 2',
		mode: 'lines',
		line: {
			color: '#3C61EA',
			width: 2
		}
	};

	var layout = {

		autosize: false,
		width: 475,
		height: 425,
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
			x: 1,
			xanchor: 'right',
			y: 1
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
			size: 12,
			color: '#FFFFFF'
		},
	};



	var data = [line1, line2];

	Plotly.newPlot('plot1', data, layout);


}




function updatePlot1(thetas1, thetas2, xy) {
	var line1 = {

		x: [0,thetas1[0]],
		y: [0,thetas1[1]],
		name: 'Direction 1',
		mode: 'lines',
		line: {
			color: '#E2281F',
			width: 2
		}
	};

	var line2 = {

		x: [0,thetas2[0]],
		y: [0,thetas2[1]],
		name: 'Direction 2',
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

	var layout = {

		autosize: false,
		width: 475,
		height: 425,
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
			x: 1,
			xanchor: 'right',
			y: 1
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
			size: 12,
			color: '#FFFFFF'
		},
	};



	var data = [line1, line2, line3];

	Plotly.newPlot('plot1', data, layout);

}
