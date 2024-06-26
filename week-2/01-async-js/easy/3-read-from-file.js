// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

function fileReader(){
    return new Promise(function(resolve){
        fs.readFile("./somefile.txt", "utf8", (err, data) => {
            resolve(data)
        })
    })
}

async function read(){
    const data = await fileReader();
    console.log(data);
}

read();

let count = 0;
for(let i = 0; i < 100000000000000; i++){
    count += i;
}

console.log(count);