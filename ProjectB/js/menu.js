//let door1;
var s1= function(p){
  let open=0;
  let hover=0;
  p.setup=function() {
    let canvas = p.createCanvas(300, 550);
    canvas.parent("canvasContainer");
    //background(220,0,0,40);
  };

  p.draw=function() {
    p.background(163,121,81,20);

    let w =500;
    let h =600;
    let x=p.mouseX;
    let y=p.mouseY;
    //fill(255,0,0);
    // p.ellipse(p.mouseX,p.mouseY,10)
    // p.ellipse(w/4-100,h/2.5+200,10);
    // p.ellipse(w/4+100,h/2.5+200,10);
    // p.ellipse(w/4-100,h/2.5-170,10);
    // p.ellipse(w/4+100,h/2.5-170,10);

     if(x>w/4-110 && x<w/4+100 && y>h/2.5-170 && y<h/2.5+200){
       open=0;
       hover=1;
     }
     else{
       open=0;
       hover=0;
     }
  //   console.log(hover);

     if( !open && !hover){
       p.push();
       p.translate(w/4,h/2.5);
       p.imageMode(p.CENTER);
       p.image(p.img1,0,0,800,600);
       p.pop();
     }
     else if (!open && hover) {
       p.push();
       p.translate(w/4, h/2.5);
       //scale(0.25);
       p.imageMode(p.CENTER);
       p.image(p.img2,0,0,800,600);
       p.pop();
     }
  }

   p.preload=function(){
     p.img1=p.loadImage("image/Door2Close.png");
     p.img2=p.loadImage("image/Door2Open.png");
   }
   p.mousePressed=function(){
     if(hover==1){
       window.location = 'room1.html';
     }
   }
}
var myp5 = new p5(s1,"c1");









var s2=function(p2){
  p2.setup=function() {
    let canvas = p2.createCanvas(400, 600);
    canvas.parent("canvasContainer2");
    //background(220,0,0,40);
  }

  p2.draw=function() {
    p2.background(163,121,81,20);
    //p2.background(255,0,0,20);

    let w =500;
    let h =600;
    let x=p2.mouseX;
    let y=p2.mouseY;
    //fill(255,0,0);
    // p2.ellipse(w/2-130,h/2+240,10);
    // p2.ellipse(w/2+150,h/2+240,10);
    // p2.ellipse(w/2-130,h/2-220,10);
    // p2.ellipse(w/2+150,h/2-220,10);

    if(x>w/2-130 && x<w/2+130 && y>h/2-220 && y<h/2+220){
      open=0;
      hover=1;
    }
    else{
      open=0;
      hover=0;
    }

    if( !open && !hover){
      p2.push();
      p2.translate(w/2,h/2);
      p2.imageMode(p2.CENTER);
      p2.image(p2.img1,0,0,800,600);
      p2.pop();
    }
    else if (!open && hover) {
      p2.push();
      p2.translate(w/2, h/2);
      //scale(0.25);
      p2.imageMode(p2.CENTER);
      p2.image(p2.img2,0,0,800,600);
      p2.pop();
    }
  }

  p2.preload=function(){
    p2.img1=p2.loadImage("image/Door3Close.png");
    p2.img2=p2.loadImage("image/Door3Open.png");
  }
  p2.mousePressed=function(){
    //console.log(1);
    if(hover==1){
      window.location = 'room2.html';
    }
  }
}
var myp5 = new p5(s2,"c2");







var s3= function(p3){
  let open=0;
  let hover=0;
  p3.setup=function() {
    let canvas = p3.createCanvas(280, 370);
    canvas.parent("canvasContainer3");
    //background(220,0,0,40);
  };

  p3.draw=function() {
    p3.background(163,121,81,20);

    let w =440;
    let h =410;
    let x=p3.mouseX;
    let y=p3.mouseY;
    //fill(255,0,0);
    //p3.ellipse(p.mouseX,p.mouseY,10)
    // p3.ellipse(w/4-95,h/2.5+130,10);
    // p3.ellipse(w/4+75,h/2.5+130,10);
    // p3.ellipse(w/4-95,h/2.5-80,10);
    // p3.ellipse(w/4+75,h/2.5-80,10);

     if(x>w/4-95 && x<w/4+75 && y>h/2.5-80 && y<h/2.5+130){
       open=0;
       hover=1;
     }
     else{
       open=0;
       hover=0;
     }
  //   console.log(hover);

     if( !open && !hover){
       p3.push();
       p3.translate(w/4,h/2.5);
       p3.imageMode(p3.CENTER);
       p3.image(p3.img1,0,0,600,400);
       p3.pop();
     }
     else if (!open && hover) {
       p3.push();
       p3.translate(w/4, h/2.5);
       //scale(0.25);
       p3.imageMode(p3.CENTER);
       p3.image(p3.img2,0,0,600,400);
       p3.pop();
     }
  }

   p3.preload=function(){
     p3.img1=p3.loadImage("image/Door4Close.png");
     p3.img2=p3.loadImage("image/Door4Open.png");
   }
   p3.mousePressed=function(){
     if(hover==1){
       window.location = 'room3.html';
     }
   }
}
var myp5 = new p5(s3,"c3");






var bg1=function(t){
  let w=t.windowWidth;
  t.setup=function() {
    let canvas = t.createCanvas(t.windowWidth, 1200);
    canvas.parent("canvasContainer4");
    t.background(163,121,81,20);
  }
  t.draw=function(){
    t.background(163,121,81,0);
    t.fill(255);
    // t.ellipse(w-325,650,10);
    // //t.ellipse(w-130,650,10);
    // t.ellipse(w*0.46,900,10);
    //t.ellipse(w*0.6,900,10);
    // //t.fill("red");
    // t.ellipse(w-100,800,10);
    // t.ellipse(w-260,740,10);
    // t.ellipse(w-250,830,10);
    // t.ellipse(w-350,950,10);
    // //t.ellipse(w-250,880,10);

    t.fill(163,121,81,20);
    t.stroke(79,56,33);
    t.strokeWeight(8);
    // t.curve(w-130,650, w-130,650, w-100,800, w-250,880);
    // t.curve(w-100,800, w-100,800, w-250,880, w*0.6,900);
    // t.curve(w-250,880, w-250,880, w*0.6,900, w*0.6,700);
    // t.curve(w-325,650, w-325,650, w-260,740, w-250,830);
    // t.curve(w-260,740, w-260,740, w-250,830, w-350,950);
    // t.curve(w-250,830, w-250,830, w-350,950, w*0.46,900);
    // t.curve(w-350,950, w-350,950, w*0.46,900, w*0.35,400);
    t.push();
    t.image(t.img1,w-740,645,800,350);
    t.image(t.img2,w/2-150,0,400,300);
    t.pop();



    t.line(w-330,260,120,540);
    t.line(w-330,260,400,540);

    let ww=t.windowWidth*0.35/7;
    let yy=(900-540)/7;
    t.strokeWeight(15);
    for(let i=1;i<=7;i++){
      t.line(120+ww*(i-1),540+yy*(i-1),120+ww*i,540+yy*(i-1));
      t.line(120+ww*i,540+yy*(i-1),120+ww*i,540+yy*i);
    }
  }
  t.preload=function(){
    t.img1=t.loadImage("image/Stair.png");
    t.img2=t.loadImage("image/Welcome.png");
    //p3.img2=p3.loadImage("image/Door4Open.png");
  }

}
var myp5 = new p5(bg1,"t");
