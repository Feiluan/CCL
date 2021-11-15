let leafOpacityCrl;
let leafOpacity;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  rectMode(CENTER);

  leafOpacityCrl = document.getElementById("leafOpacity");

}

function draw() {
  leafOpacity=leafOpacityCrl.value;
  console.log(leafOpacityCrl.value);
  console.log(leafOpacity+"1");


  background(135,206,250);
  fill(124,205,124);
  noStroke();
  rect(windowWidth/2,windowHeight/2+160,windowWidth+200,windowHeight*3/5);

  stroke(0);
  fill(255);
  quad(windowWidth/2,windowHeight*1/3+100,windowWidth/2+50,windowHeight*1/3+100,windowWidth/2+70,windowHeight*1/3+240,windowWidth/2,windowHeight*1/3+250);
  quad(windowWidth/2,windowHeight*1/3+100,windowWidth/2-50,windowHeight*1/3+100,windowWidth/2-70,windowHeight*1/3+240,windowWidth/2,windowHeight*1/3+250);
  fill(178,34,34);
  triangle(windowWidth/2-80,windowHeight*1/3+100,windowWidth/2+80,windowHeight*1/3+100,windowWidth/2,windowHeight*1/6+100);

  leaf(60,0,150,20);
  leaf(-60,0,150,20);
  leaf(0,60,20,150);
  leaf(0,-60,20,150);
}


function leaf(a,b,l,w){

  console.log(leafOpacity+"2");
  push();
  translate(windowWidth/2,windowHeight*1/3);
  stroke(0);
  fill(255,255,255,leafOpacity);
  rotate(radians(frameCount));
  rect(a,b,l,w);
  pop();

}
