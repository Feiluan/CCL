let w,h;
let x=[];
let y=[];
let count;
//let bg;

let leafOpacityCrl,leafOpacity,opacity2;
let leafLengthCtl,leafLength;
let leafWidthCtl,leafWidth;
let leafColorCtl,leafColor;

let roofCtl,roof;
let roofColorCtl,roofColor;

let checkboxLeafColor;
//let checkboxLeafColor2;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  //bg = createGraphics(windowWidth, windowHeight);
  //let canvas2 = createGraphics(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  //canvas2.parent("canvasContainer");

  rectMode(CENTER);
  w = windowWidth;
  h = windowHeight;
  count=0;

  leafOpacityCrl = document.getElementById("leafOpacity");
  leafLengthCtl = document.getElementById("leafLength");
  leafWidthCtl = document.getElementById("leafWidth");
  leafColorCtl = document.getElementById("leafColor");
  roofCtl = document.getElementById("roof");
  roofColorCtl = document.getElementById("roofColor");
  checkboxLeafColor = document.getElementById("checkboxLeafColor");
  //checkboxLeafColor2 = document.getElementById("checkboxLeafColor2");
}

function draw() {

  leafOpacity=int(leafOpacityCrl.value);
  leafLength=int(leafLengthCtl.value);
  leafWidth=int(leafWidthCtl.value);
  leafColor=int(leafColorCtl.value);
  roof=int(roofCtl.value);
  roofColor=int(roofColorCtl.value);
  //console.log(roofColorCtl.value);

  background(135,206,250);
  fill(124,205,124);
  noStroke();
  rect(w/2,h/2+160,w+200,h*3/5);

  drawRoof(roof,roofColor);

  for(let i=0;i<=count;i++){
    noStroke();
    fill(255);
    ellipse(x[i],y[i],70,50);
    ellipse(x[i]+30,y[i]+5,40,30);
    ellipse(x[i]-30,y[i]+5,40,30);
    console.log(count);
  }

  leaf(60,0,100+leafLength,leafWidth-30);
  leaf(-60,0,100+leafLength,leafWidth-30);
  leaf(0,60,leafWidth-30,100+leafLength);
  leaf(0,-60,leafWidth-30,100+leafLength);
}

function drawCloud(){
  count++;
  x.push(random(0,w));
  y.push(random(0,h*1/3));
  console.log(count);
}

function deleteCloud(){
  count--;
  x.splice(0,1);
  y.splice(0,1);
  console.log(count);
}

function drawRoof(roof,roofColor){
  stroke(0);
  fill(255);
  quad(w/2,h*1/3+100,w/2+50,h*1/3+100,w/2+70,h*1/3+240,w/2,h*1/3+250);
  quad(w/2,h*1/3+100,w/2-50,h*1/3+100,w/2-70,h*1/3+240,w/2,h*1/3+250);
  if(roofColor==1){fill(204,88,88);}
  if(roofColor==2){fill(178,34,34);}
  if(roofColor==3){fill(212,131,115);}
  triangle(w/2-80,h*1/3+100,w/2+80,h*1/3+100,w/2,h*1/3-40);

  for(let i=1;i<=roof;i++){
    line(w/2-80/(roof+1)*i,h*1/3-40+140/(roof+1)*i,w/2+80/(roof+1)*i,h*1/3-40+140/(roof+1)*i);
  }
}


function leaf(a,b,l,w){
  push();
  colorMode(HSB);
  translate(windowWidth/2,windowHeight*1/3);
  stroke(0);

  if(checkboxLeafColor.checked){
    fill(0,0,100,leafOpacity/100);
  }
  else{
    fill(leafColor,25,85,leafOpacity/100);
  }
  rotate(radians(frameCount));
  rect(a,b,l,w);
  pop();
}
