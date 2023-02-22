function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("thistle");

  changeSprite(88, 88, 2.25, 178, 172, 136);
}

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
