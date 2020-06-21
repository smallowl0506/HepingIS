let bg;
function preload(){
  bg = loadImage('background.jpg',successF(),errorF());
}

function successF(){
	print("Success");
}

function errorF(){
	print("Error!!!")
}

function setup() {
  let myCanvas = createCanvas(800, 400);
  myCanvas.parent('myContainer');
  background(bg);
}

function draw() {
	noStroke();
	fill((mouseX/3)%270,(255-mouseY/2)%270,(mouseX/3+mouseY/2)%270);
	ellipse(mouseX, mouseY, 20, 20);
}