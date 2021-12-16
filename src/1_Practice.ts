// 指令 node 1_Practice.js
// # Simple Exercise I

// Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.
function printMany():void{
    for(let i=1; i<=100; i++){
        console.log(i);
    }
}
// printMany();

// Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
function printEvery3():void{
    for(let i=1; i<=88; i+=3){
        console.log(i);
    }
}
// printEvery3();

// Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
function stars(star:number):void{
    let result = [];
    let i = 0;
    while(i < star){
        result.push('*');
        i++;
    }
    console.log(result.join(''));
}
// stars(10);

// Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
function isUpperCase(str:string):void{
    console.log(/[A-Z]/.test(str[0]));
}
// isUpperCase("C");

// Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
function isAllUpperCase(str:string):void{
    for(let item of str){
        if(/[A-Z]/.test(item) === false){
            console.log(false);
            return;
        }
    }
    console.log(true);
}

isAllUpperCase('AVCS')
export {}