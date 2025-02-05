// console.log("Hello");

// fs yani ki file system 

// studying file systems

const fs = require('fs');

// fs.writeFileSync('Billy.txt', 'Hello world');

// let data = fs.readFileSync('./Billy.txt', 'utf-8');
// console.log(data);

// fs.appendFileSync('./Billy.txt', '\nHello world by append');

// fs.writeFileSync('./temp.txt', '');

// fs.cpSync('./Billy.txt', './temp.txt');

// fs.unlinkSync('./temp.txt');

// fs.mkdirSync('public');

// fs.mkdirSync('./public/frontend');

// fs.mkdirSync('backend/div/temp' , { recursive: true });

// fs.rmSync('./public/frontend', { recursive: true });

// fs.renameSync('./Billy.txt', './public/Billy.txt');

// fs.renameSync('./public/Billy.txt', './public/hello.txt');

// cross side scripting  -  this is how hacking works 

// fs.writeFileSync('Blink2.html', '<h1>Hello world</h1>');


// let data = fs.readFileSync('./public/hello.txt', 'utf-8');
// console.log(data);

// console.log("this is print");


// Asynchronously..........................

// fs.writeFile('pink.txt', 'this is div data', (err) => {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('file created');
//     }
// });

// console.log('hi this is second code...');

// fs.readFile('./public/hello.txt', 'utf-8', (err,data) => {
//         if (err) {
//             console.log(err);
//         }else{
//             console.log(data);
//         }
//     });

fs.mkdir('./templates/hello', {recursive : true}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('folder created successfully');
    }
});