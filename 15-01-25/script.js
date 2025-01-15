// const divHead = document.querySelector('#divHead');
// divHead.classList.add('active');

// togel and contain

// ----------------events---------------------

// function clickDiv(){
//     console.log('hi');
// }
// function clickDiv(){
//     const divHead = document.querySelector('#divHead');
//     divHead.classList.toggle('active');

// }


// const btnclick = document.querySelector('clickDiv');
// btnclick.addEventListener('click',()=>{
//     if(divHead.classList.contains.remove){
//         divHead.classList.remove('active');
//     }else{
//         divHead.classList.add('active');
//     }
// });


// ---------------------dom completed------------------

// ---------------------set attribute------------------

// animation grid and resposiveness

// ------------------------project cpunter app--------------------------------------

// const display = document.querySelector('#display')
// let value = 0;


// function dec(){
//     value--;
//     display.textContent = value;
// }
// function Reset(){
//     value = 0;
//     display.textContent = value;
// }
// function Inc(){
//     value = value+1;
//     display.textContent = value;
// }


// // long way (another way)
//  const decrease = document.querySelector('#decrease');
//  decrease.addEventListener('click',()=>{
//     value--;
//     display.textContent = value;
//  });

// ---------------------------------project completed-------------------------

let jsonData = `{
    "name" : "vivek",
    "age" : 99,
    "city" : "hr"
}`;

console.log(jsonData);

let objData = JSON.parse(jsonData);
console.log(objData); 
console.log(objData.age); 

objData.name = "john"; // manipulation in data

console.log(objData);

// conversion to json

let updateJsonData = JSON.stringify(objData);
console.log(updateJsonData);

// datat ko json ki file se fetch karne k kiye fetch fn

// async function -- left for next class