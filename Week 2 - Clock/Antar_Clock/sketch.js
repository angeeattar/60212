var plantArray = [];
var branchArray = [];
var inc = 0.001;
var px;
var py;
var bearingInRadians;
var deflectionAmount;
var stepSize;
var v;
var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var secs = d.getSeconds();

function setup() {
  createCanvas(800,800);
  background(200);
  frameRate(1);
  noFill();
}
var oldHours = 0;
var oldMinutes = 0;
var oldSecs = 0;
function draw() {

  fill(255);
  var d = new Date();
  var hours = d.getHours();
  hours = hours%12;
  if (hours==0) hours=12;
  var minutes = d.getMinutes();
  var secs = d.getSeconds();
  
  if (oldHours == 0) var plantH = hours;

background(80);
  for (var t =0; t<(hours); t++){
    plantArray = [];
    plant(t);
    oldHours = plantH;
    var x = 0;
    println(abs(oldMinutes-minutes))
      for(var q = 0; q<minutes; q++){
        var L = random(plantArray.length);
        var plantX = plantArray[Math.floor(L)][0];
        var plantY = plantArray[Math.floor(L)][1];
        x++;

        branchArray = [];
        branch(q,plantX,plantY);
        for (var k = 0; k<secs; k++) {
          var L = random(branchArray.length);
          var branchX = branchArray[Math.floor(L)][0];
          var branchY = branchArray[Math.floor(L)][1];
  
          veign(q,branchX,branchY);
        }
      
    }
    oldMinutes=minutes
  }
} 

function plant(t){
  noFill();
  beginShape();
  move = (PI*200*t)%800;
  var start = t*100;
  var xoff = start;
  var plantMax = height/(t+1);
  for (var y = 0; y<(height-50); y++) {
    stroke(255);

    var n = map(noise(xoff), 0 , 1, 0, plantMax);
    var x = n;
    vertex(x+move,y);
    xoff += 0.003;
    
    plantArray.push([x+move,y])
  }
  endShape();

}

function branch(q,plantX,plantY){

  beginShape();
  stroke(hours*10,minutes*5,secs*3);
  px = plantX
  py = plantY
  bearingInRadians = random(radians(180));
  deflectionAmount = 0.25;
  var stepSize = 2;
  var branchLength = height*.05;

  var qx = px;
  var qy = py;
  for (var i = 0; i < branchLength; i++) {
    px += stepSize *(sin(bearingInRadians));
    py += stepSize * cos(bearingInRadians);
    branchArray.push([px,py]);

    var t = i * 0.25;

    var deflection = deflectionAmount * random(40)/120;
    bearingInRadians += deflection;

    line(qx, qy, px, py);
    qx = px;
    qy = py;

  }endShape();
}

function veign(k,branchX,branchY){
  beginShape();
  stroke(255, 183, 197);
  pbx = branchX
  pby = branchY
  bearingInRadians = random(90);
  deflectionAmount = 0.25;
  var stepSize = 1;
  var veignLength = height*.01;
  
  var qbx = pbx;
  var qby = pby;
  for (var i = 0; i < veignLength; i++) {
    pbx += stepSize * cos(bearingInRadians);
    pby += stepSize * sin(bearingInRadians);

    var t = i * 0.25;
    var myNoise = map(noise(t), 0, 1, -5, 5);
    var deflection = deflectionAmount * myNoise;
    bearingInRadians += deflection;

    line(qbx, qby, pbx, pby);
    qbx = pbx;
    qby = pby;
    
  }endShape();
  
}

// Completed with the guidance of Golan Levin, Dan Shiffman, Tyler Goulding
