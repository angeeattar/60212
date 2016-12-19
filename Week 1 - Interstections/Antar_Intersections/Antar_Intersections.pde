int lineQuant = 15;
float lines[][];

//ints for intersecting 
float  x1 = 0;
float  x2 = 0;
float  y1 = 0;
float  y2 = 0;
  
float  x3 = 0;
float  x4 = 0;
float  y3 = 0;
float  y4 = 0;

float ua = 0;
float ub = 0;
float d = 0;

void setup() {
  size(500,500);
  lineQuant = 15; //<>//
  lines = new float[lineQuant][4]; 

}

void draw() {
  
}

void mousePressed(){
  // delete old lines
  background(255); 
  
  //draw new lines
  drawLines();
  
  // nested for loops to find the points of the lines
  for (int j = 0; j < lines.length; j++){
    x1 = lines[j][0];
    y1 = lines[j][1];
    x2 = lines[j][2];
    y2 = lines[j][3];
    
    for (int k = j+1; k < lines.length; k++){
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
        println(ub);
        float circleX = x1 + ua*(x2-x1);
        float circleY = y1 + ua*(y2-y1);
        
        //if yes, draw a circle over the point of intersection
        fill(random(255),random(255),random(255));
        ellipse(circleX,circleY, 10, 10);

      } 
    }
  }
}

void drawLines(){
  //reset the lists to empty
  float[][] lines;

  // only draw the correct number of lines
  for (int i = 0; i < lineQuant; i+=1){
    randLine(i);
  }
}
  
  
void randLine(int i){
  //lets mjdraw some random lines, but don't let them go off the edge
    float x1 = random(width*.1,width*.9);
    float y1 = random(height*.1,height*.9);
    float x2 = random(width*.1,width*.9);
    float y2 = random(height*.1,height*.9);
    
    //append line points to list
    line(x1,y1,x2,y2);
    lines[i][0] = x1;
    lines[i][1] = y1;
    lines[i][2] = x2;
    lines[i][3] = y2;
    
    //random colours, so many colours~
    stroke(random(255), random(255), random(255));
    
    // don't draw forever
    noLoop();
}