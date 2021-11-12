let roundbuttom = document.getElementById('one');

roundbuttom.addEventListener('click',roundButtomClick);
function roundButtomClick(){
  let rectElem= document.getElementById('af')
  rectElem.style.borderRadius = "0px";
}

let i=0;
i=i+2;

//alert(i);
console.log("Hello");
console.log("123");

function say(what){
  //alert(what);
  //element find
  let elem = document.getElementById('asd');
  console.log(elem);
  //create new element and save into the variable
  let newelem = document.createElement('p');
  //change the element content
  newelem.innerHTML=what;
  //add new element
  elem.appendChild(newelem);


  let llem = document.getElementById("heading");
  let rectElem = document.getElementById('af');
  console.log(rectElem);
  console.log(llem);
  if(what=="harder"){
    llem.style.color = 'blue';
    rectElem.style.borderRadius = "0px";
  } else{
    llem.style.color = 'yellow';
    rectElem.style.borderRadius = "50px";
  }

}
//transition
