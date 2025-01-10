// console.log('hoye hoye');
// let person1 = {
//     name : 'john',
//     age : '30',
//     gender : 'Male'
// }
// console.log(person1);

// console.log('age - ' + person1.age);

//  let person2 = {
//     name: 'billy',
//     age : '25',
//     gender : 'female'
//  }
//  console.log('age P2 - ' + person2['age']);

//  console.log('by for in loop :- ');
//  for(let i in person2 ){
//     console.log(person2[i]);
//  }

//  // value update karna (modify karna)

//  person2.name = 'Billy Eilish'

//  console.log('updated name = '+person2.name);

//  let obj1 = {
//     x : '10',
//     y : '20'
//  }

//  let obj2 = obj1;
//  console.log('object 1 :- '+obj1);
//  console.log('object 2 :- '+obj2);

//  let obj1 = 10;
//  let obj2 = obj1;
// obj1 = 200;

// console.log(obj1);
// console.log(obj2);

// let obj1 = {
//     x : '10'
// }
// let obj2 = obj1;

// obj1.x = 20;

// console.log('this is obj1 = ',obj1);
// console.log('this is obj2 = ',obj2);

// ---------------------------------------------object cloning notebook---------------------------------------

// ---------------------------------------------nested objects -----------------------------------------------

// let obj1 = {
//     x : '10',
//     y : {
//         a : '20'
//     }
// }

// console.log(obj1);

// let obj1 = {
//     x : '10',
//     y : function(){
//         console.log('hii this is object fn');
//     }
// }

// obj1.y();
// console.log(obj1.y);

// let obj1 = {
//     x : '10',
//     y : '2'
// }

// console.log(obj1);

// // let x = obj1.x;
// // let y = obj1.y;   

// // object destructuring - another way to store data of object values in new variable

// let {x,y} = obj1;

// console.log('this iis object destructruting' , x, y);

// constructing -- variables se obj ko value deni ho

// let x = 10;
// let y = 20;

// let obj = {
//     x,
//     y
// }
// console.log(obj);

// var a = 100;
// console.log(a);

// let b = 200;
// console.log(b);

// let arr = [1,'pin',2.0];
// console.log(arr);

// // arr 0 se kyon start hota hai - taki cycle 
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]); 
// }

// for (i of arr){
//     console.log(i);
// }

// console.log(arr[2]);

// let arr = [1,3,4,2]; 
// arr.sort();

// console.log(arr)

// let newarr = arr.map((item)=>{
//     return item * 2; // bina return k bhi likha jaa sakta hai 
// });

// console.log(newarr);

let arr = [[1,2,3],[1,2]];

console.log(arr);

let arr2 = [function inarr(){
    console.log('this is fn in array')
}];

console.log(arr2);

let arr3 = [
    {
      x : 1,
      y : 2
    },
    {
      x : 3,
      y : 4
    }
];

console.log(arr3);

let arr4 = [1,2,3,4,5];

let x = arr[0];
let y = arr[1];

console.log(arr.includes({x:1,y:2}));