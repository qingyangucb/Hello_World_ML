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

// The starfield background is from a youtube channel https://www.youtube.com/watch?v=17WoOqgXsRM
let stars = [];

let speed;



function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}



function draw() {
  speed = map(mouseX/2, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  };

  this.show = function() {
  	var colors = ['#E2281F','#3C61EA', '#FFFF00', '#ffffff'];
  	var color = colors[Math.floor(Math.random() * colors.length)]

    fill(color);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(color);
    line(px, py, sx, sy);
  };
}



