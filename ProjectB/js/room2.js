var room2bg= function(bg){

  bg.setup=function() {
    let canvas = bg.createCanvas(bg.windowWidth, 1000);
    canvas.parent("canvasContainer");
    //bg.background(220,0,0,40);
  };

  bg.draw=function() {
    //bg.background(163,121,81,20);

    //bg.image(bg.door,800,330,600,500);
     // bg.ellipse(50,190,10);
     // bg.ellipse(50,190+300,10);
     // bg.ellipse(50+380,190,10);
     // bg.ellipse(50+380,190+300,10);

    let x=bg.mouseX;
    let y=bg.mouseY;
    console.log(x,y);
    bg.noStroke();

    bg.image(bg.paint1,50,190,380,300);
    bg.image(bg.paint2,450,30,310,200);
    bg.image(bg.paint3,520,260,400,280);
    bg.image(bg.Frame1,0,140,480,400);
    bg.image(bg.Frame1,415,0,380,260);
    bg.image(bg.Frame1,480,220,490,370);

    if(x>50 && x<430 && y>190 && y<490){
      bg.fill(50,50,50,80);
      bg.rect(50,190,380,300,20);

      bg.push();
      bg.translate(50,190);
      bg.fill(255,255,255,200);
      bg.text("The Starry Night",140,40);
      bg.text("oil-on-canvas painting, Post-Impressionist",67,80);
      bg.text("Dutch, Vincent van Gogh, June 1889",80,120)
      bg.text("Depicts the view from the east-facing window of his asylum room at",6,160);
      bg.text("Saint-Rémy-de-Provence, just before sunrise, with the addition",6,200);
      bg.text("of an imaginary village.",6,240);
      bg.pop();
    }
    if(x>450 && x<760 && y>30 && y<230){
      bg.fill(50,50,50,80);
      bg.rect(450,30,310,200,20);

      bg.push();
      bg.translate(450,30);
      bg.fill(255,255,255,200);
      bg.text("A Sunday Afternoon on the Island of La Grande Jatte",10,40);
      bg.text("pointillist technique, executed on a large canvas",20,80);
      bg.text("French, Georges Seurat, 1884-1886",50,120);
      bg.pop();


    }
    if(x>520 && x<920 && y>260 && y<540){
      console.log(x);
      bg.fill(50,50,50,80);
      bg.rect(520,260,400,280,20);

      bg.push();
      bg.translate(520,260);
      bg.fill(255,255,255,200);
      bg.text("Still Life with Water Jug",130,40);
      bg.text("French, Paul Cezanne, c.1892-3",100,80);
      bg.text("The same objects are painted over and over again",6,120);
      bg.text("He believed that conventional perspective, which uses a single viewpoint,",6,160);
      bg.text("did not accurately reflect the way that we perceive the world. In this",6,200);
      bg.text("painting, he combined several viewpoints of the fat-bellied jug and fruit.",6,240);
      bg.text("Like many of his works, it was left unfinished.",6,280);
      bg.pop();
    }

  }

   bg.preload=function(){
     bg.Frame1=bg.loadImage("image/Frame.png");
     bg.paint1=bg.loadImage("image/Paint11.JPG");
     bg.paint2=bg.loadImage("image/Paint2.jpg");
     bg.paint3=bg.loadImage("image/Paint3.jpg");

     //bg.img2=bg.loadImage("image/Door2Open.png");
   }

}
var myp5 = new p5(room2bg,"bg");







var room2Door= function(d){
  let open=0;
  let hover=0;

  d.setup=function() {
    let canvas = d.createCanvas(300, 490);
    //let canvas = d.createCanvas(1000, 1000);
    canvas.parent("canvasContainer2");
    //d.background(220,0,0,40);
  }

  d.draw=function(){
    d.background(239,237,234,40);
    d.image(d.door,-120,-10,600,500);

    let x=d.mouseX;
    let y=d.mouseY;
    // d.ellipse(80,55,10);
    // d.ellipse(80,430,10);
    // d.ellipse(290,55,10);
    // d.ellipse(290,440,10);

    if(x>80 && x<290 && y>55 && y<430){
      hover=1;
    }
    else{
      hover=0;
    }

    if( !open && !hover){
      d.push();
      d.image(d.door,-120,-10,600,500);
      d.pop();
      //console.log(hover);
    }
    else if (!open && hover) {
      d.push();
      // p.translate(w/4, h/2.5);
      // //scale(0.25);
      // p.imageMode(p.CENTER);
      d.image(d.doorr,-120,-10,600,500);
      d.pop();
    }
  }

  d.preload=function(){
    d.door=d.loadImage("image/Door3Close.png");
    d.doorr=d.loadImage("image/Door3Open.png");
    //bg.img2=bg.loadImage("image/Door2Open.png");
  }

  d.mousePressed=function(){
    if(hover==1){
      window.location = 'menu.html';
    }
  }

}
var myp5 = new p5(room2Door,"d");


var room2Doors= function(ds){
  let open=0;
  let hover=0;

  ds.setup=function() {
    let canvas = ds.createCanvas(130,200);
    //let canvas = d.createCanvas(1000, 1000);
    canvas.parent("canvasContainer3");
    //ds.background(220,0,0,40);
  }

  ds.draw=function(){
    ds.background(239,237,234,40);
    ds.image(ds.door,-100,-10,300,200);

    let x=ds.mouseX;
    let y=ds.mouseY;
    // ds.ellipse(10,35,10);
    // ds.ellipse(10,150,10);
    // ds.ellipse(85,35,10);
    // ds.ellipse(85,150,10);

    if(x>10 && x<85 && y>35 && y<150){
      hover=1;
      console.log(hover);
    }
    else{
      hover=0;
    }

    if( !open && !hover){
      ds.push();
      ds.image(ds.door,-100,-10,300,200);
      ds.pop();
      //console.log(hover);
    }
    else if (!open && hover) {
      ds.push();
      // p.translate(w/4, h/2.5);
      // //scale(0.25);
      // p.imageMode(p.CENTER);
      ds.image(ds.doorr,-100,-10,300,200);
      ds.pop();
    }
  }

  ds.preload=function(){
    ds.door=ds.loadImage("image/Door2Close.png");
    ds.doorr=ds.loadImage("image/Door2Open.png");
    ds.doorrr=ds.loadImage("image/Door4Close.png");
    ds.doorrrr=ds.loadImage("image/Door4Open.png");
    //bg.img2=bg.loadImage("image/Door2Open.png");
  }

  ds.mousePressed=function(){
    if(hover==1){
      window.location = 'room1.html';
    }
  }

}
var myp5 = new p5(room2Doors,"ds");




var room2Doorss= function(dss){
  let open=0;
  let hover=0;

  dss.setup=function() {
    let canvas = dss.createCanvas(70,100);
    //let canvas = d.createCanvas(1000, 1000);
    canvas.parent("canvasContainer4");
    dss.background(220,0,0,40);
  }

  dss.draw=function(){
    dss.background(239,237,234,40);
    //dss.image(dss.doorr,-45,-5,150,100);

    let x=dss.mouseX;
    let y=dss.mouseY;
    // dss.ellipse(10,27,10);
    // dss.ellipse(10,80,10);
    // dss.ellipse(45,27,10);
    // dss.ellipse(45,80,10);

    if(x>10 && x<45 && y>27 && y<80){
      hover=1;
      console.log(hover);
    }
    else{
      hover=0;
    }

    if( !open && !hover){
      dss.push();
      dss.image(dss.door,-45,-5,150,100);
      dss.pop();
      //console.log(hover);
    }
    else if (!open && hover) {
      dss.push();
      // p.translate(w/4, h/2.5);
      // //scale(0.25);
      // p.imageMode(p.CENTER);
      dss.image(dss.doorr,-45,-5,150,100);
      dss.pop();
    }
  }

  dss.preload=function(){
    dss.door=dss.loadImage("image/Door4Close.png");
    dss.doorr=dss.loadImage("image/Door4Open.png");
    //bg.img2=bg.loadImage("image/Door2Open.png");
  }

  dss.mousePressed=function(){
    if(hover==1){
      window.location = 'room3.html';
    }
  }

}
var myp5 = new p5(room2Doorss,"dss");
