let but1 = document.querySelector(".a1");
let but2 = document.querySelector(".a2");
let but3 = document.querySelector(".a3");
let but4 = document.querySelector(".a4");
let butArray = [but1,but2,but3,but4];
let win1 = document.querySelector(".win1");
let win2 = document.querySelector(".win2");
let win3 = document.querySelector(".win3");
let win4 = document.querySelector(".win4");

let win_cont1 = document.querySelector(".win1_cont");
let win_cont2 = document.querySelector(".win2_cont");
let win_cont3 = document.querySelector(".win3_cont");
let win_cont4 = document.querySelector(".win4_cont");

let collectEl = document.querySelectorAll(".e");
let collectWin_cont = document.querySelectorAll(".win_cont");

let arrayEl = Array.prototype.slice.call(collectEl,0);
let arrayWin_cont = Array.prototype.slice.call(collectWin_cont,0);
 
let count = 0;

but1.addEventListener("click", clickBut1);
but2.addEventListener("click", clickBut2);
but3.addEventListener("click", clickBut3);
but4.addEventListener("click", clickBut4);

function chekClass(arr,eg,arrBtn){

    for(let i = 0; i < arr.length; i++){
    
       if(arr[i].classList.contains('open') && arr[i] != eg){
      /*   searchNumberClass(arr[i],count);
        searchBtnClass(arrBtn[i],searchNumberClass,count); */
        arr[i].classList.remove('open');
        arr[i].classList.add('close');
        setTimeout(function(){
          arr[i].classList.remove('close');
          arr[i].classList.add('load');
        },400)
       }; 
     }
        if(eg.classList.contains('load')){
          eg.classList.remove('load');
          eg.classList.add('open');
        }
        else if(eg.classList.contains('close')){
          eg.classList.remove('close');
          eg.classList.add('open');
        }
      }


    setInterval(function(){
      if(count == 4){
        count =0;
      }
      chekClass(arrayWin_cont,arrayWin_cont[count],butArray); 
      butArray[count].classList.add("btnActieve");
      if(count == 0){
        if(butArray[3].classList.contains("btnActieve")){
        butArray[3].classList.remove("btnActieve");
        }
      }
else if(count != 0){
        butArray[count-1].classList.remove("btnActieve");
}
    
      count++;
    },2000);

function clickBut1(e){
count = 0;
let el = e.target;
  chekClass(arrayWin_cont,arrayWin_cont[0]);
  activeButton(el,butArray);
  el.classList.add("btnActieve");
}

function clickBut2(e){
  count = 1;
  let el = e.target;
  chekClass(arrayWin_cont,arrayWin_cont[1]);
  activeButton(el,butArray);
  el.classList.add("btnActieve");
}

function clickBut3(e){
  count = 2;
  let el = e.target;
  chekClass(arrayWin_cont, arrayWin_cont[2]);
  activeButton(el,butArray);
  el.classList.add("btnActieve");
}

function clickBut4(e){
  count = 3;
  let el = e.target;
  chekClass(arrayWin_cont,arrayWin_cont[3]);
  activeButton(el,butArray);
  el.classList.add("btnActieve");
}

 function activeButton(el,arr){
  
  console.log(el);
   arr.forEach((v,i,a) => {
      if(a[i] != el){
        if(a[i].classList.contains("btnActieve")){
          a[i].classList.remove("btnActieve");
        }
      
      }
  }); 
 }

