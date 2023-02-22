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

For the third exercise, the assignment was to create two seperate sprites which would appear based on whether or not the mouse is pressed.

I chose to create a bear and a planet.

To do this, I created a function called changeSprites(), which I used to hold the "instructions" to make the two sprites. I then used an if-else conditional to change the sprite from a bear to a planet when the mouse is pressed.

function changeSprite(x, y, size, myRed, myGreen, myBlue) {
  if (mouseIsPressed) {
    push();
    translate(x, y);
    scale(size);

    noFill();
    stroke(myRed, myGreen, myBlue);
    strokeWeight(8);
    ellipse(50, 50, 150, 50);
    noStroke();
    fill("darkkhaki");
    ellipse(50, 50, 100);
    // Northern latitude.
    fill(myRed, myGreen, myBlue);
    arc(50, 50, 100, 100, 200, -20, OPEN);
    // Southern latitude.
    fill(myRed, myGreen, myBlue);
    arc(50, 50, 100, 100, 30, 150, OPEN);
    // North pole.
    fill(myRed, myGreen, myBlue);
    arc(50, 50, 100, 100, 240, -60, OPEN);
    // South pole.
    fill("darkkhaki");
    arc(50, 50, 100, 100, 60, 120, OPEN);
    pop();
  } else {
    push();
    translate(x, y);
    scale(size);

    stroke("thistle");
    fill(188, 154, 125);
    ellipse(15, 15, 50); // Left ear.
    fill("rgb(228,203,180)");
    ellipse(20, 20, 40); // Left inside ear.
    fill(188, 154, 125);
    ellipse(85, 15, 50); // Right ear.
    fill("rgb(228,203,180)");
    ellipse(80, 20, 40); // Right inside ear.
    fill(188, 154, 125);
    ellipse(50, 50, 100); // Head.
    fill("rgb(228,203,180)");
    stroke("rgb(228,203,180)");
    ellipse(50, 70, 50, 40); // Snout.
    fill("pink");
    stroke(188, 154, 125);
    strokeWeight(0.5);
    ellipse(50, 60, 25, 15); // Nose.
    pop();
  }
}
