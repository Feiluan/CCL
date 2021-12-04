let n=140;
let i;


function setup() {
  let canvas = createCanvas(1400, 550);
  canvas.parent("canvasContainer");
  console.log(windowWidth);

}



function draw() {
  background(225);
  let w=windowWidth;

  for(i=1;i<=w/n;i++){
    line(n*i,0,n*i,550);//WhiteKey
    fill(255);
    rect(n*(i-1),0,n*i,550);
  }

  //line(n*2/3*i,0,n*2/3*i,300);
  for(i=1;i<=w/n;i++){
    if(i%7!=2 && i%7!=5){
      fill(0);
      rect((i-1)*n+n*2/3,0,n*2/3,300);
    }
  }
  // rect(n*2/3,0,n*2/3,300);
  // rect(n+n*2/3,0,n*2/3,300);
  // rect(3*n+n*2/3,0,n*2/3,300);
  // rect(4*n+n*2/3,0,n*2/3,300);
  // rect(5*n+n*2/3,0,n*2/3,300);
  // rect(7*n+n*2/3,0,n*2/3,300);
  // rect(8*n+n*2/3,0,n*2/3,300);


  textSize(100);
  text("A",35,500);
  text("C",2*n+35,500);
}
