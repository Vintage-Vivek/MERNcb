const display  = document.querySelector('#display');


let value = 0;

 
// function dec(){
//     value--;
//     display.textContent = value;
// }

function Reset(){
    value = 0;
    display.textContent = value;
}

function Inc(){
    value = value + 1;
    display.textContent = value;
}

const decBtn = document.querySelector('#decBtn');

decBtn.addEventListener('click', ()=>{
    value--;
   display.textContent = value;
})