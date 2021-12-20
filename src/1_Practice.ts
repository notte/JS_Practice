// 指令 npm run build -> node ./dist/practice.js
// # Simple Exercise I

// Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.
function printMany():void {
    for(let i=1; i<=100; i++){
        console.log(i);
    }
}
// printMany();

// Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
function printEvery3():void {
    for(let i=1; i<=88; i+=3){
        console.log(i);
    }
}
// printEvery3();

// Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
function stars(star:number):void {
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
function isUpperCase(str:string):void {
    console.log(/[A-Z]/.test(str[0]));
}
// isUpperCase("C");

// Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
function isAllUpperCase(str:string):void {
    if(str.length === 0){
        console.log(false);
        return;
    }
    for(let item of str){
        if(/[A-Z]/.test(item) === false){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
// isAllUpperCase('')

// Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
function position(str:string):void {
    const arr = str.split('');
    for(let index in arr){
        if(/[A-Z]/.test(arr[index]) === true){
            console.log(arr[index], index);
            return;
        }
    }
    console.log(-1);
}
// position('abCD');

// Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.
function findSmallCount(arr:number[],num:number):void {
    const result = [];
    for(let item of arr){
        if(item < num){
            result.push(item);
        }
    }
    console.log(result.length);
}
// findSmallCount([1,2,3,4,5],0);

// Write a function called "findSmallerTotal" that takes one array of integers and one integer as input, and returns the sum of all elements in the array that are smaller than the input integer.
function findSmallerTotal(arr:number[],num:number):void {
    let result = 0;
    let times = 0;
   
    for(let item of arr){
        if((result + item) <= num){
            result += item;
            times++;
        }
    }

    if(times <= 1 || times === 0){
        console.log(0);
        return;
    }
    console.log(result);
}
// findSmallerTotal([3, 2, 5, 8, 7], 0);

// Write a function called "findAllSmall" that takes one array of integers and another integer as input, and returns an array of integers that contains all elements that are smaller than the input integer.
function findAllSmall(arr:number[],num:number):void {
    let result = [];
    for(let item of arr){
        if(item < num){
            result.push(item);
        }
    }
    console.log(result);
}
findAllSmall([1, 3, 5, 4, 2], 4);

export {}