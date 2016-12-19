var rows;
var cols;
var length = 20;
var xStep;
var yStep;
var noiseScale = .2;
var xoff= .001;
var isShown= .01;
function setup() {

  createCanvas(800,800);
  background(255);
  rows = height/length;
  cols = width/length;
  xStep = 10;
  yStep = 15;
}

function draw() {
  noLoop();
  var num = width/length;
  for (var r=0; r<(height); r+=xStep){
     for (var c=0; c<(width); c+=yStep){
      var noiseShown = noise(isShown)
      //println(noiseShown)
      
      var noiseVal = noise(xoff)
      if (noiseShown > .3){
        line1 = new lines_angle(r,c,noiseVal*2*PI)
        line1.display(r,c);
        xoff+=.1;
      }
      isShown +=.01;
    } 
  }
}

function lines_angle(r,c,angle){
  this.y = c;
  this.x = r;
  var x2 = length * cos(angle);
  var y2 = length * sin(angle);
  this.display = function (){
    line(this.x, this.y, this.x+x2, this.y+y2);    
  }  

}



function lines(r,c) {
  this.y = c;
  this.x = r;
  
  this.display = function (){
    line(this.x, this.y, this.x, this.y+length);    
  }

}

