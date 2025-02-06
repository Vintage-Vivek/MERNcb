const fs = require('fs');

// fs.writeFileSync('temp.txt' , 'this is a text file');

const path = require('path');

// require module ko import karta hai npm se (this can import custom module also from file which we made (jo file hamne banai ho))

// let extension = path.extname('temp.txt');
// console.log(extension);

// let baseName = path.basename('temp.txt');
// console.log(baseName);

// let dirName = path.dirname('temp.txt');
// console.log(dirName);

// let tempDir = path.dirname('./div/temp/temp.js');
// console.log(tempDir);

// let pathObj = path.parse('./temp.txt');
// console.log(pathObj.ext);
// console.log(pathObj.base);

// console.log(__dirname);

// path format study later

// path join important

// let tempPath = path.join(__dirname, 'div' , 'temp' , 'temp.js');
// console.log(tempPath);

// let tempPathWithoutPathjoin = 'C:\Users\vivek\OneDrive\Desktop\MERNcbGIT\MERNcb\6-2-25\div\temp\temp.js'
// console.log(path.parse(tempPathWithoutPathjoin));

// let absolutePath = path.resolve('temp.txt');
// console.log(absolutePath);


console.log('hii');

// console.log(__filename);

// const obj = require('./grid');
// printText();
// console.log(obj);
// obj.sum(100,200);
// obj.printText();

const {sum,printText} = require('./grid');
sum(100,200);
printText();


// file ko he module khete hain