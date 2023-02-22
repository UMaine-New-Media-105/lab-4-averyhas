# lab-4-averyhas
lab-4-averyhas created by GitHub Classroom

In the first exercise, the assignment was to create three seperate shapes (without using rect()) using a function which allowed for the parameters to be
changed by the user. In addition to this, the second exercise was to use these shapes to create parameters which would change the color at the user's will.

The shapes I chose to make were an ellipse, a triangle, and a heart.

I created functions for each of my shapes (addEllipse, addTriangle, and addHeart), which I then called underneath function Draw(), which looked like this:
  addEllipse(75, 75, 100, 100, 230, 175, 280);
  addTriangle(150, 25, 150, 125, 250, 125, 250, 150, 300);
  addHeart(240, -10, 0.4, 200, 175, 250);
  
This code included the parameters for each shape, as well as the RGB color codes.

Then, I included the shape "instructions" in each function:

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
