//     const banner = document.querySelector('#banner')
//     const car = document.createElement('div');
//     const para = document.createElement('p');
//     const cross = document.createElement('button');
//     const imgs = document.querySelector('#imgs')

// function createbanner(){
//     cross.textContent = 'X';
//     para.textContent = 'book a test drive';
//     car.appendChild(imgs);
//     car.appendChild(para);
//     car.appendChild(cross)
//     banner.appendChild(car);
//     cross.addEventListener('click', ()=>{
//         banner.removeChild(car);
//     });
// }

// setInterval(()=>{
//     createbanner()

// }, 5000)

// ya toh html se karke append ya phir create element se img tag

// -----------------------------------------------------------------------------------------------------

// callback hell

// first(()=>{
//  second(()=>{
//     third()
//  })
// })


// setTimeout(()=>{
    
// })

// --------------------PROMISE CHANING--------------------

// let first=()=>{
//     return new Promise((resolve, reject)=>{
//         try{
//          setTimeout(()=>{
//              console.log('first');
//              resolve()
//          }, 3000)
//         }catch(err){
//          reject('err')
//         }
//     });
// };
// // first().then((res)=>{
// //     second().then(()=>)
// // });





// let second=()=>{
//     return new Promise((resolve, reject)=>{
//         try{
//          setTimeout(()=>{
//              console.log('second');
//              resolve()
//          }, 5000)
//         }catch(err){
//          reject('err')
//         }
//     });
// };
// // second();


// let third=()=>{
//     return new Promise((resolve, reject)=>{
//         try{
//          setTimeout(()=>{
//              console.log('third');
//              resolve()
//          }, 1000)
//         }catch(err){
//          reject('err')
//         }
//     });
// };
// third();

// first()
// .then(()=>{
//    return second()
// }).then(()=>{
//    return third()
// }).catch((err)=>{
//     console.log('err');
// });

// -----------------------------COMPLEX CHAINING OF CALLBACK HELL -----------------------------
// first(()=>{
//     console.log('hi');
//     second(()=>{
//         third(()=>{
//             forth(()=>{
//                 fivth(()=>{
//                     // and so on hahaha
//                     // it grows horizontally which looks like hell and gets complex as 
//                     // the number of callbacks/funtions increases
//                 })
//             })
//         })
//     })
// })

// --------------------------------ASYNC AND AWAIT -------------------------------
// async function asyncawait(){
//     await first();

//     await second();

//      third();

//     console.log('all done');
// }

// asyncawait();

// console.log('oye hoye');    

// async function temp(){
//     let res = await fetch('./index.html');
//     console.log(res);
//     // await setTimeout(()=>{
//     //     console.log('first');
//     // }, 5000);
//     setTimeout(()=>{
//         console.log('second');
//     }, 2000);
// }
// temp();

// let res = await fetch('./index.html');
// console.log(res);


// lakin wahi await jo promise return karega


// function div(){
//     let x = 10;

//     function temp(){
//         console.log(x);
//     }
//     return x;
// }
// div();
// let x = div();
// console.log(x);

// function div(){
//     let x = 10;

//     function temp(){
//         console.log(x);
//     }
//     return temp;
// }
// let temp = div();
// temp();
// console.log(temp);
// function div(){
//     var x = 10; // let bhi use kar sakte hain ----- let ka reference use ho jata hai jo memory me update ho jata hai ---- same scope me he hai toh farak nahi padta ----

//     function temp(){
//         console.log(x);
//     }
//     x=300;
//     return temp;
// }
// let temp = div();
// temp();
// console.log(temp);
function div(){
    var x = 10; // let bhi use kar sakte hain ----- let ka reference use ho jata hai jo memory me update ho jata hai ---- same scope me he hai toh farak nahi padta ----

    function temp(){
        x=400; // yeh aapna kudh ka variable hai isliye yeh print hoga iske baad woh kisi ki reference nahi lega 
        console.log(x);
    }
    x=300;
    return temp;
}
let temp = div();
temp();
console.log(temp);