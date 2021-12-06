var room1Door= function(d){
  let open=0;
  let hover=0;

  d.setup=function() {
    let canvas = d.createCanvas(300, 555);
    //let canvas = d.createCanvas(1000, 1000);
    canvas.parent("canvasContainer1");
    //d.background(220,0,0,40);
  }

  d.draw=function(){
    d.background(239,237,234,40);
    d.image(d.door,-270,-50,750,600);

    let x=d.mouseX;
    let y=d.mouseY;
    // d.ellipse(10,75,10);
    // d.ellipse(10,450,10);
    // d.ellipse(190,75,10);
    // d.ellipse(190,450,10);

    if(x>10 && x<190 && y>75 && y<450){
      hover=1;
    }
    else{
      hover=0;
    }

    if( !open && !hover){
      d.push();
      d.image(d.door,-270,-50,750,600);
      d.pop();
      //console.log(hover);
    }
    else if (!open && hover) {
      d.push();
      // p.translate(w/4, h/2.5);
      //scale(1,-1);
      // p.imageMode(p.CENTER);
      d.image(d.doorr,-270,-50,750,600);
      d.pop();
    }
  }

  d.preload=function(){
    d.door=d.loadImage("image/Door2Close.png");
    d.doorr=d.loadImage("image/Door2Open.png");
    //bg.img2=bg.loadImage("image/Door2Open.png");
  }

  d.mousePressed=function(){
    if(hover==1){
      window.location = 'menu.html';
    }
  }

}
var myp5 = new p5(room1Door,"d");





var room1Doors= function(ds){
  let open=0;
  let hover=0;

  ds.setup=function() {
    let canvas = ds.createCanvas(200,240);
    //let canvas = d.createCanvas(1000, 1000);
    canvas.parent("canvasContainer2");
    //ds.background(220,0,0,40);
  }

  ds.draw=function(){
    ds.background(239,237,234,40);
    ds.image(ds.door,-50,-10,350,250);

    let x=ds.mouseX;
    let y=ds.mouseY;
    // ds.ellipse(70,30,10);
    // ds.ellipse(70,210,10);
    // ds.ellipse(190,30,10);
    // ds.ellipse(190,210,10);

    if(x>70 && x<190 && y>30 && y<210){
      hover=1;
      console.log(hover);
    }
    else{
      hover=0;
    }

    if( !open && !hover){
      ds.push();
      ds.image(ds.door,-50,-10,350,250);
      ds.pop();
      //console.log(hover);
    }
    else if (!open && hover) {
      ds.push();
      // p.translate(w/4, h/2.5);
      // //scale(0.25);
      // p.imageMode(p.CENTER);
      ds.image(ds.doorr,-50,-10,350,250);
      ds.pop();
    }
  }

  ds.preload=function(){
    ds.door=ds.loadImage("image/Door3Close.png");
    ds.doorr=ds.loadImage("image/Door3Open.png");
    //ds.doorrr=ds.loadImage("image/Door4Close.png");
  //  ds.doorrrr=ds.loadImage("image/Door4Open.png");
    //bg.img2=bg.loadImage("image/Door2Open.png");
  }

  ds.mousePressed=function(){
    if(hover==1){
      window.location = 'room2.html';
    }
  }

}
var myp5 = new p5(room1Doors,"ds");






var room1Doorss= function(dss){
  let open=0;
  let hover=0;

  dss.setup=function() {
    let canvas = dss.createCanvas(120,150);
    //let canvas = d.createCanvas(1000, 1000);
    canvas.parent("canvasContainer3");
    //dss.background(220,0,0,40);
  }

  dss.draw=function(){
    dss.background(239,237,234,40);
    //dss.image(dss.doorr,-45,-5,200,150);

    let x=dss.mouseX;
    let y=dss.mouseY;
    // dss.ellipse(27,45,10);
    // dss.ellipse(27,120,10);
    // dss.ellipse(75,45,10);
    // dss.ellipse(75,120,10);

    if(x>27 && x<75 && y>45 && y<120){
      hover=1;
      console.log(hover);
    }
    else{
      hover=0;
    }

    if( !open && !hover){
      dss.push();
      //dss.scale(1,-1,0);
      dss.image(dss.door,-45,-5,200,150);
      dss.pop();
      //console.log(hover);
    }
    else if (!open && hover) {
      dss.push();
      // p.translate(w/4, h/2.5);
      //dss.scale(1,-1,-1);
      // p.imageMode(p.CENTER);
      dss.image(dss.doorr,-45,-5,200,150);
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
var myp5 = new p5(room1Doorss,"dss");







var room1Art = function(a){
  a.setup=function() {
    let canvas = a.createCanvas(a.windowWidth, a.windowHeight);
    //let canvas = d.createCanvas(1000, 1000);
    canvas.parent("canvasContainer5");
    //a.background(225,0,0,40);
  }

  let w=a.windowWidth;
  let h=a.windowHeight;

  let xpos=620;
  let ypos=130;
  let xposs=1000
  let yposs=410
  let xposss=500
  let yposss=420

  let speedx=a.random(-5,5);
  let speedy=a.random(-5,5);
  let speedxx=a.random(-5,5);
  let speedyy=a.random(-5,5);
  let speedxxx=a.random(-5,5);
  let speedyyy=a.random(-5,5);
  let count=0,countt=0,counttt=0;
  let n1=true,n2=true,n3=true;
  let k=0;

  a.draw=function(){
    //a.background(239,237,234,5);
    let x=a.mouseX;
    let y=a.mouseY;

    a.push();

    a.imageMode(a.CENTER);

    a.image(a.Frame1,1000,410,380,280);
    a.image(a.Frame1,620,130,450,340);
    a.image(a.Frame1,500,420,550,400);


    a.image(a.paint1,xpos,ypos,380,300);
    a.image(a.paint2,xposs,yposs,310,200);
    a.image(a.paint3,xposss,yposss,400,280);
    if(count==0){
      xpos+=a.random(-1,1);
      ypos+=a.random(-1,1);
      a.image(a.angry,xpos+140,ypos-70,400,300);
    }
    else{
      if(count%3==1){
        a.image(a.paint1,xpos,ypos,380,300);
      }
      if(count%3==2){
        a.image(a.paint11,xpos,ypos,380,300);
      }
      if(count%3==0){
        a.image(a.paint12,xpos,ypos,380,300);
      }
      if(xpos<0 || xpos>w){
        speedx*=-1;
        speedy=a.random(-5,5);
        count++;
      }
      if(k==1){
        a.image(a.emoji1,xpos,ypos,420,350);
      }
      if(k==2){
        a.image(a.emoji2,xpos,ypos,420,350);
      }
      if(k==3){
        a.image(a.emoji3,xpos,ypos,420,350);
      }
      if (ypos < 0 || ypos > h) {
        speedy*=-1;
        speedx=a.random(-5,5);
        count++;
      }
      xpos+=speedx;
      ypos+=speedy;
    }

    if(countt==0){
      xposs+=a.random(-1,1);
      yposs+=a.random(-1,1);
      a.image(a.angry,xposs-100,yposs-30,300,200);
    }
    else{
      if(xposs<0 || xposs>w){
        speedxx*=-1;
        speedyy=a.random(-5,5);
        countt++;
      }
      if (yposs < 0 || yposs > h) {
        speedyy*=-1;
        speedxx=a.random(-5,5);
        countt++;
      }
      xposs+=speedxx;
      yposs+=speedyy;
      if(k==1){
        a.image(a.emoji1,xposs,yposs,300,270);
      }
      if(k==2){
        a.image(a.emoji2,xposs,yposs,300,270);
      }
      if(k==3){
        a.image(a.emoji3,xposs,yposs,300,270);
      }
    }

    if(counttt==0){
      xposss+=a.random(-1,1);
      yposss+=a.random(-1,1);
      a.image(a.angry,xposss+20,yposss-50,400,300);
    }
    else{
      if(xposss<0 || xposss>w){
        speedxxx*=-1;
        speedyyy=a.random(-5,5);
        counttt++;
      }
      if (yposss < 0 || yposss > h) {
        speedyyy*=-1;
        speedxxx=a.random(-5,5);
        counttt++;
      }
      xposss+=speedxxx;
      yposss+=speedyyy;
      if(k==1){
        a.image(a.emoji1,xposss,yposss,350,300);
      }
      if(k==2){
        a.image(a.emoji2,xposss,yposss,350,300);
      }
      if(k==3){
        a.image(a.emoji3,xposss,yposss,350,300);
      }
    }
    a.pop();
  }

  a.mousePressed=function(){
    let x=a.mouseX;
    let y=a.mouseY;
    k=a.floor(a.random(1,3.5));
    console.log(k);
    if(x>xpos-190 && x<xpos+190 && y>ypos-150 && y<ypos+150){
      if(count==0){
        count++;
        console.log("count"+count);
        console.log(x,y);
      }
      else if(count>0){
        count=0;
        console.log("count"+count);
        console.log(x,y);
      }
    }
    if(x>xposs-155 && x<xposs+155 && y>yposs-150 && y<yposs+150){
      if(countt==0){
        countt++;
        //console.log("countt"+countt);
      }
      else if(countt>0){
        countt=0;
        //console.log("countt"+countt);
      }
    }
    if(x>xposss-200 && x<xposss+200 && y>yposss-140 && y<yposss+140){
      if(counttt==0){
        counttt++;
        //console.log("counttt"+counttt);
      }
      else if(counttt>0){
        counttt=0;
        //console.log("counttt"+counttt);
      }
    }
  }


  a.preload=function(){
    a.paint1=a.loadImage("image/Paint1.jpg");
    a.paint11=a.loadImage("image/Paint11.JPG");
    a.paint12=a.loadImage("image/Paint12.JPG");
    a.paint2=a.loadImage("image/Paint2.jpg");
    a.paint3=a.loadImage("image/Paint3.jpg");
    a.angry=a.loadImage("image/Angry.png");
    a.emoji1=a.loadImage("image/emoji1.png");
    a.emoji2=a.loadImage("image/emoji2.png");
    a.emoji3=a.loadImage("image/emoji3.png");
    a.Frame1=a.loadImage("image/Frame.png");
  }
}
var myp5 = new p5(room1Art,"a");



























// let n=140;
// let i;
//
//
// function setup() {
//   let canvas = createCanvas(1400, 550);
//   canvas.parent("canvasContainer");
//   console.log(windowWidth);
//
// }
//
//
//
// function draw() {
//   background(225);
//   let w=windowWidth;
//
//   for(i=1;i<=w/n;i++){
//     line(n*i,0,n*i,550);//WhiteKey
//     fill(255);
//     rect(n*(i-1),0,n*i,550);
//   }
//
//   //line(n*2/3*i,0,n*2/3*i,300);
//   for(i=1;i<=w/n;i++){
//     if(i%7!=2 && i%7!=5){
//       fill(0);
//       rect((i-1)*n+n*2/3,0,n*2/3,300);
//     }
//   }
//   // rect(n*2/3,0,n*2/3,300);
//   // rect(n+n*2/3,0,n*2/3,300);
//   // rect(3*n+n*2/3,0,n*2/3,300);
//   // rect(4*n+n*2/3,0,n*2/3,300);
//   // rect(5*n+n*2/3,0,n*2/3,300);
//   // rect(7*n+n*2/3,0,n*2/3,300);
//   // rect(8*n+n*2/3,0,n*2/3,300);
//
//
//   textSize(100);
//   text("A",35,500);
//   text("C",2*n+35,500);
// }
