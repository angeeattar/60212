var font;
var moveB = 0;
var moveB2 = 0;
var moveB3 = 0;
var moveB4 = 0;
var move = 0;
var move2 = 0;
var move3 = 0;
var move4 = 0;
var angle = 0.1;
var angle2 = 0.3;
var angle3 = 0.5;
var angle4 = 0.7;
var offSet = 400;
var scalar = 40;
var speed = 0.05;

function setup() {
	createCanvas(800, 800);
	fill(255);
	noStroke();
	font = loadFont("assets/UniversLTStd-BoldCnObl.otf");
	textFont(font);
	textSize(120);

}

function draw() {
  background(0);
  
  fill(150,255,255);
  text("O",((width*.25)), move+4);
  fill(255,150,255);
  text("O",(width*.26), move);
  fill(150,255,255);
  text("K",((width*.35)), move2+4);
  fill(255,150,255);
  text("K",(width*.36), move2);
  fill(150,255,255); 
  text("A",((width*.44)), move3+4);
  fill(255,150,255);
  text("A",(width*.45), move3);
  fill(150,255,255); 
  text("Y",((width*.52)), move4+4);
  fill(255,150,255);
  text("Y",(width*.53), move4);
  
  
  fill(255,150,255);
  text("B",(width*.4), moveB+4);
  fill(150,255,255);
  text("B",(width*.41), moveB);
  fill(255,150,255);
  text("A",(width*.49), moveB2+4);
  fill(150,255,255);
  text("A",(width*.50), moveB2);
  fill(255,150,255);
  text("B",(width*.58), moveB3+4);
  fill(150,255,255);
  text("B",(width*.59), moveB3);
  fill(255,150,255);
  text("E",(width*.67), moveB4+4);
  fill(150,255,255);
  text("E",(width*.68), moveB4);
  
  move = offSet + sin(angle) * scalar;
  angle+=speed;
  move2 = offSet + sin(angle2) * scalar;
  angle2+=speed;
  move3 = offSet + sin(angle3) * scalar;
  angle3+=speed;
  move4 = offSet + sin(angle4) * scalar;
  angle4+=speed;
  
  moveB = move+100;
  moveB2 = move2+100;
  moveB3 = move3+100;
  moveB4 = move4+100;

}

//https://beta.openprocessing.org/sketch/280175 for the sine wave
