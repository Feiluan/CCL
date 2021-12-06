let open=false;
let hover=false;
let enter=false;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("canvasContainer");
  //canvasMode(CENTER);
}

function draw() {
  background(225,225,225,80);
  //quad(w/2-w/2*6/41,h/27*17.5)

  let w =800;
  let h =600;
  //let w =windowWidth;
  //let h =windowHeight;
  let x=mouseX;
  let y=mouseY;
  fill(255,0,0);
  //ellipse(w/2-115,h/2+165,10);
  //ellipse(w/2+110,h/2+165,10);
  //ellipse(w/2-115,h/2-170,10);
  //ellipse(w/2+105,h/2-170,10);
  noStroke();


  if(x>w/2-115 && x<w/2+110 && y>h/2-170 && y<h/2+165){
    fill(150);
    //quad(w/2-w/2*6/41,h/27*17.5, w/2-w/2*5.5/41,h/27*17.5, w/2+w/2*5/41,h/27*19.5, w/2-w/2/41,h/27*21);
    //ellipse(mouseX,mouseY,10,10)
    //console.log(x,y);
    open=0;
    hover=1;
  }
  else{
    fill(180);
    //quad(w/2-w/2*6/41,h/27*17.5, w/2+w/2*5.5/41,h/27*17.5, w/2+w/2*11.5/41,h/27*21, w/2-w/2/41,h/27*21);
    open=0;
    hover=0;
  }

  if( !open && !hover){
    push();
    //scale(0.25);
    translate(w/2,h/2);
    imageMode(CENTER);
    image(img1,0,0,800,600);
    pop();
  }
  else if (!open && hover) {
    push();
    translate(w/2, h/2);
    //scale(0.25);
    imageMode(CENTER);
    image(img2,0,0,800,600);
    pop();
  }
}

function preload(){
  img1=loadImage("image/FirstDoorClose.png");
  img2=loadImage("image/FirstDoorOpen.png");
}

function mousePressed(){
  if(hover==1){
    //console.log(1);
    window.location = 'menu.html';
  }

}
