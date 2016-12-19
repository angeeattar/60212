var lines = [];
var lineQuant = 15; // make it 100 if you want

//vars for intersecting 
var  x1 = 0;
var  x2 = 0;
var  y1 = 0;
var  y2 = 0;
  
var  x3 = 0;
var  x4 = 0;
var  y3 = 0;
var  y4 = 0;

var ua = 0;
var ub = 0;
var d = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
}

function mousePressed(){
  // delete old lines
  background(255); 
  
  //draw new lines
  drawLines();
  
  // nested for loops to find the points of the lines
  for (var j = 0; j < lines.length; j++){
    x1 = lines[j][0];
    y1 = lines[j][1];
    x2 = lines[j][2];
    y2 = lines[j][3];
    println("j = " + j + " x1 = " + x1)
    
    for (var k = j+1; k < lines.length; k++){
      x3 = lines[k][0];
      y3 = lines[k][1];
      x4 = lines[k][2];
      y4 = lines[k][3];
      
      // thanks bourke
      d = ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
      ua = (((x4-x3)*(y1-y3)-(y4-y3)*(x1-x3))/d);
      ub = (((x2-x1)*(y1-y3)-(y2-y1)*(x1-x3))/d);
      
      // is it a legit point of intersection?
      if (ua >=0 && ua <=1 && ub >=0 && ub <=1){
        var circleX = x1 + ua*(x2-x1);
        var circleY = y1 + ua*(y2-y1);
        
        //if yes, draw a circle over the point of intersection
        fill('rgba((255),random(255),random(255),.3)');
        ellipse(circleX,circleY, 10, 10);

      } 
    }
  }
}

function drawLines(){
  //reset the lists to empty
  lines=[];
  
  // only draw the correct number of lines
  for (var i = 0; i < lineQuant; i+=1){
    randLine();
  }
}
  
  
function randLine(){
  //lets draw some random lines, but don't let them go off the edge
    var x1 = random(width*.1,width*.9);
    var y1 = random(height*.1,height*.9);
    var x2 = random(width*.1,width*.9);
    var y2 = random(height*.1,height*.9);
    
    //append line points to list
    line(x1,y1,x2,y2);
    lines.push([x1,y1,x2,y2]); 
    
    //random colours, so many colours~
    stroke(random(255), random(255), random(255));
    
    // don't draw forever
    noLoop();
}