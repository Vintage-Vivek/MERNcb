function printText(){
    console.log('this is text file');
}

// module.exports = printText;

function sum(a,b){
    console.log(a+b);
}

// sum(3,5);
module.exports = {sum,printText};