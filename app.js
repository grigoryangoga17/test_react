// const fs = require("fs");
// const os = require("os");

// console.log("Platform:", os.platform());
// console.log("OS Type:", os.type());
// console.log("Architecture:", os.arch());

// const cpus = os.cpus();
// console.log(cpus);
// console.log("Number of CPU cores:", cpus.length);
// console.log("CPU Model:", cpus[0].model);

// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());




/////////////////////////////////////

// console.log("hello world");
// console.log(1);
// console.log(true);
// console.log([1, 2, 3]);

/////////////////////////////////

// const name = "Gohar";
// const age = 19;

// console.log(`my name is ${name}, I am ${age} years old`);

/////////////////////////////////



// console.log(process.version);
// console.log(process.platform);
// console.log(process.argv);
// console.log(process.argv[1]);


///////////////////////////////////

// fs.writeFile('data.txt', 'barev dzez', (err) =>{
//     if(err) console.log(err)
//     else console.log(('file created'));
// })

////////////////////////////////////

// fs.readFile('data.txt', "utf8", (err, data) =>{
//     if (err) {
//         console.log("Error reading file"); 
//     } else {
//         console.log(data);
        
//     }
// })

//////////////////////////////////

// fs.appendFile("data.txt", " noric barev", (err) =>{
//     if (err) {
//         console.log("Error appending file");
//     }else {
//         console.log("Content append successfuly");
//     }
// });

////////////////////////////////

// fs.unlink("data.txt", (err) =>{
//     if (err) {
//         console.log("Error deleting file");
        
//     } else {
//         console.log("File deleted successfuly");
        
//     }
// })

///////////////////////////////

// fs.mkdir('myf', (err) => {
//     if(err) {
//         console.log("error creating folder");
//     } else{
//         console.log("Folder created successfuly");
        
//     }
// })

/////////////////////////////

// fs.readdir(`myf`, (err, files) =>{
//     if(err){
//         console.log("Error reading directory");
        
//     } else {
//         console.log(files);
        
//     }
// })

//////////////////////////////

// fs.rename ("data.txt", "urish.txt", (err) => {
//     if (err) {
//         console.log("Error renaming file");
        
//     } else {
//         console.log("File renamed successfuly");
        
//     }
// })

////////////////////////////

// fs.copyFile("urish.txt", "copy.txt", (err) => {
//     if (err) {
//         console.log("Error copying file");
        
//     } else {
//         console.log("File copied successfuly");
        
//     }
// })

///////////////////////////

// fs.stat("urish.txt", (err, stats) => {
//     if (err) {
//         console.log("Error getting file info");
        
//     } else {
//         console.log("File size:", stats.size);
//         console.log("Is file:", stats.isFile());
//         console.log("Is directory:", stats.isDirectory());
//         console.log("Created at:", stats.birthtime);
//         console.log("Modifed at:", stats.mtime);
        
//     }
// })

/////////////////////////////////












// console.log("Hello node.js");

// let name = "Goga";
// let age = 16;

// console.log(name);
// console.log(age);


// let a = 10;
// let b = 5;

// console.log(a + b);


// let name = "Goga"
// console.log("Hello " + name);

// let age = 17;

// if(age >= 18) {
//     console.log("Chapahas");
    
// } else {
//     console.log("Anchapahas");
    
// }


// function sum (a,b) {
//     return a + b;
// }
// console.log(sum(5, 5));

// for (let i = 1; i <= 3; i++) {
//     console.log(i);
    
// }

// let arr = ["a", "b", "c"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// let user = {
//     name: "Goga",
//     age: 16
// };
// console.log(user.name);
// console.log(user.age);

// let x = 5;

// function test(x) {
//     x = x + 10;
//     return x;
// }

// console.log(test(x));
// console.log(x);

// console.log(__filename);
// console.log(__dirname);


const os = require("os")
const fs = require("fs")


// console.log(os.platform());
// console.log(os.type());
// console.log(os.totalmem());
// console.log(os.freemem());

// fs.writeFileSync("taza.txt", "hello Node.js");

// const data = fs.readFileSync("taza.txt", "utf-8");
// console.log(data);




// 1)
// console.log("Օպերացիոն համակարգի անունը", os.platform());
// console.log("CPU Architecture", os.arch());
// console.log("Free Memory", os.freemem());
// console.log("Total Memory", os.totalmem());

////////////////////////////////////////////////////////////


// 2)
// const text = `Hello from Node.js
// ${new Date()}`;

// fs.writeFile("hello.txt", text, (err) => {
//     if (err) {
//         console.log("Սխալ:", err);
//         return;
//     }

//     console.log("Ֆայլը հաջողությամբ ստեղծվեց");
// });

////////////////////////////////////////////////////////////////

// 3)
// fs.readFile("hello.txt", "utf8", (err, data) =>{
//     if(err) {
//         console.log("Sxal:", err);
//         return;
        
//     }
//     console.log(data);
    
// })

/////////////////////////////////////////////////////////////////

// 4)


// fs.appendFile("hello.txt", "\nNew text added", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("Տեքստը ավելացվեց");
// });

/////////////////////////////////////////////////////////////////////




























