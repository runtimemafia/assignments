// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let count = 0;

function counterAdd(){
    // Promise resolves after 1000ms or 1s
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("1 second passed")
        }, 1000);
    })
}

async function main(){
    const res = await counterAdd(); // Wait for one second
    count++; // Increment the counter
    console.clear();
    console.log(`Count: ${count}`); // Print the latest count
    main()
}

main();





































































// (Hint: setTimeout)