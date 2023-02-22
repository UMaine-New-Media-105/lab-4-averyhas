function setup() {
  createCanvas(400, 150);
}

function draw() {
  background("thistle");
  
  addEllipse(75, 75, 100, 100, 230, 175, 280);
  addTriangle(150, 25, 150, 125, 250, 125, 250, 150, 300);
  addHeart(240, -10, 0.4, 200, 175, 250);
  
}

function addEllipse(x, y, w, h, myRed, myBlue, myGreen){
  fill(myRed, myBlue, myGreen)
  ellipse(x, y, w, h)
  
}

function addTriangle(x1, y1, x2, y2, x3, y3, myRed2, myBlue2, myGreen2){
  fill(myRed2, myBlue2, myGreen2)
  triangle(x1, y1, x2, y2, x3, y3)
  
}
  
function addHeart(x, y, size, myRed3, myGreen3, myBlue3){
  push();
  translate(x, y);
  scale(size);
  strokeWeight(2);
  
  fill(myRed3, myBlue3, myGreen3);
  beginShape();
  vertex(120, 80);
  vertex(200, 140);
  vertex(280, 80);
  vertex(350, 180);
  vertex(200, 340);
  vertex(50, 180);
  vertex(120, 80)
  endShape();
  pop();
  
}
