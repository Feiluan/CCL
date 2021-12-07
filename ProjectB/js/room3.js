function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("canvasContainer");
  //frameRate(8000);
  //canvasMode(CENTER);

  button = createButton('Save your masterpiece');
  button.position(windowWidth/2-40, windowHeight+60);
  button.mousePressed(takePic);
}



let getcolor=false;
let r=0,g=0,b=0;
let paints=[];


function draw(){
  let w=windowWidth;
  let h=windowHeight;

  paints[0]=new paint(100,h/3,0);
  paints[0].display();
  paints[1]=new paint(w-150,h/4-10,1);
  paints[1].display();
  paints[2]=new paint(w-150,h/4*3,2);
  paints[2].display();
  imageMode(CENTER);

  //image(paint1,100,windowHeight/3,340,240);
  //image(paint2,w-150,h/4-10,280,190);
  //image(paint3,w-150,h/4*3,280,190);

  image(frame,windowWidth/2,windowHeight/2-50,800,700);
  let x=mouseX;
  let y=mouseY;

  // fill(255,0,0);
  // rect(20,40,20,20);
  // fill(0,255,0);
  // rect(60,40,20);
  // fill(0,0,255);
  // rect(100,40,20);
  // fill(0);
  // rect(20,80,20);
  // fill(255);
  // rect(60,80,20);
  // fill(127);
  // rect(100,80,20);

  fill(0);
  text("Colour Choose",30,25);
  text("Click the box at right",15,45);
  text("Then click the colour",15,65);
  text("Then you could use it!",15,85);

  fill(255);
  rect(140,40,80,50);
  fill(0);
  text("Colour Get",150,60);
  text("(Click me!)",150,80);

  if(mouseIsPressed){
    if(x>w/2-300 && x<w/2+300 && y>h/2-50-350 && y<h/2-50+270){
      push();
      noStroke();
      fill(r,g,b);
      stroke(r,g,b);
      strokeWeight(5);
      line(pmouseX,pmouseY,x,y);
      //ellipse(x,y,5);
      pop();
    }
  }

}


function mousePressed(){
  let x=mouseX;
  let y=mouseY;
  if(getcolor){
    let colour=get(mouseX,mouseY);
    r=red(colour);
    g=green(colour);
    b=blue(colour);
    // console.log(mouseX,mouseY);
    // console.log(getcolor);
    // console.log(colour);
    // console.log(r,g,b);
    getcolor=false;
  }
  else if(!getcolor){
    if(x>140 && x<220 && y>40 && y<130){
      getcolor=true;
      //console.log(getcolor);
    }
  }
  // console.log(getcolor);
  // console.log(r,g,b);
}

function takePic() {
  saveCanvas();
}

function preload(){
  frame=loadImage("image/Frame.png");
  paint1=loadImage("image/Paint1.jpg");
  paint2=loadImage("image/Paint2.jpg");
  paint3=loadImage("image/Paint3.jpg");
}

class paint{
  constructor(startX,startY,n){
    this.x=startX;
    this.y=startY;
    this.paint=n;
  }
  display(){
    push();
    imageMode(CENTER);
    if(this.paint==0){
      image(paint1,this.x,this.y,340,240);
    }
    if(this.paint==1){
      image(paint2,this.x,this.y,280,190);
    }
    if(this.paint==2){
      image(paint3,this.x,this.y,280,190);
    }
    pop();
  }
}
