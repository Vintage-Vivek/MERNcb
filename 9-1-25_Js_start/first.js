// console.log('hi its javascript')
// console.log('Hello world')
// console.log se print hoti hai value
// let a = 10;
// let a = vivek;
// var a = 10;
// const a = 10;
// console.log(a)

// dynamic language (btate nahi konsa data hai aapne aap identify kar leta hai)

// scope khete hain brackets k andar wale code ko

// {
//     // var a = 10; // global variable jise code me kahin bhi use kar sakte hain
       // let b = 10;
//     // const c = 10;
// }

// console.log(a);
// console.log(b); // not global so it would give error // same with const
// console.log(c);

// scope ek line pe aligne kar deta hai compiler

// UNDEFINE 

// consloe.log(a);

// var a = 10; // gives error UNDEFINE

// let a = 10; // gives decleration , error aata hau phele print baad me declare

// function div(){
//     // var a = 10;
//     a = 10;
// }

// div()

// console.log(a); // yeh error trough kare ga

// var function k scope ko respect karta hai , function k andar limited scope ho jata hai woh local variable ban jayega fn k scope me

// local scope - {}
// global scope - pura code global scope hota hai 
// functional scope - function bana k socpe limit karna 

// if (true){
//     console.log('hii');
// }

// n = 10;
// if (n<10){
//     console.log('hii');
// }

// for(let i = 1; i <= 5; i++){
//     console.log('hello');
// }

// let a = 10;
// var b = 10;
// if(a===b){
//     console.log('true')
// } else {
//     console.log('false')
// }
// if(a===b) console.log('first');
// else console.log('not first')


// --------------------------------------Function in js--------------------------------------------


//normal functioin
// function div(x){
//     console.log('this is function');
//     console.log(x); // parameter
// }

// div() // call karna fn ko
// div(10) // argument



// anonymous function
// let div = function(){
//     console.log('this is fn expression'); 
// }
// arrow function, bas jab function na likhn ho (matlab function word) toh ham arrow use kar sakte hain ECMA sscript 6 me develop kiya gaya tha
// let div = ()=>{
//     console.log('this is fn expression'); 
// }

// div()

// ------------------------------------------Hoisting (yehi speling hai) (imp topic for interview)----------------------------------

// defination se kaam nahi chale ga isme samjhana padega

// div();

// function div(){
//     console.log('studying hosting');
// }
// yeh kaam karta hai

// let div = ()=>{
//     console.log('This is hosting arrow function');
// }

// div();
// yeh bhi kaam kar jayega

// var div = ()=>{
//     console.log('This is hosting arrow function');
// }

// div();
// yeh bhi kaam kare ga


// yeh error throw kare ga :-
// console.log(x);
// let x = 10;
// var x = 10;

//-------------------------------------------high order function and first class fn-----------------------------------------------------
// function child(){
//     console.log('hey this is child fn')
// }

// function parent(){
//     Callback();
//     console,lof('hey');
// }

// function parent(callback){
//     Callback();
//     console,lof('hey');
// }

// parent(function(){
//     console.log('hey this is child fn')
// })

//--------------------------------------------



function parent(){
    console.log("this is parent function");
    return function(){
        console.log('this is returning fn');
        return function(){
            console.log('this is returning returning fn');
            
        }
    }
}

// let child = parent();
// child();

parent()(); // short way to write above two lines

// 3rd exercise wiki pedia clone