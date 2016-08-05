var myRed = 18;
var myGreen = 0;
var myBlue = 255;




function setup() {
  createCanvas(640, 480);
  background(234, 179, 240);
}

function draw() {
  noStroke();
  
  fill(myRed, myGreen, myBlue);
if (mouseIsPressed);


  
  
  ellipse(mouseX, mouseY, 10);
  //chicken(mouseX, mouseY);
  myRed = myRed + 0.5;
  if(myRed > 255){
    myRed = 0;
  }
  myBlue = myBlue - 1;
  if(myBlue < 0){
myBlue = 255;
    }


  
  
  
}
