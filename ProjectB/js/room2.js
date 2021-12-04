var room2bg= function(bg){


  bg.setup=function() {
    let canvas = bg.createCanvas(bg.windowWidth, 1000);
    canvas.parent("canvasContainer");
    //bg.background(220,0,0,40);
  };

  bg.draw=function() {
    //bg.background(163,121,81,20);

    // let x=bg.mouseX;
    // let y=bg.mouseY;

    bg.image(bg.paint1,0,0,200,200);
  //
  //    if( !open && !hover){
  //      p.push();
  //      p.translate(w/4,h/2.5);
  //      p.imageMode(p.CENTER);
  //      p.image(p.img1,0,0,800,600);
  //      p.pop();
  //    }
  //    else if (!open && hover) {
  //      p.push();
  //      p.translate(w/4, h/2.5);
  //      //scale(0.25);
  //      p.imageMode(p.CENTER);
  //      p.image(p.img2,0,0,800,600);
  //      p.pop();
  //    }
  // }

   bg.preload=function(){
     bg.paint1=bg.loadImage("image/Paint11.JPG");
     //bg.img2=bg.loadImage("image/Door2Open.png");
   }
}
}
var myp5 = new p5(room2bg,"bg");
