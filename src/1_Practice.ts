// 指令 npm run build -> node ./dist/practice.js
// # Simple Exercise I

function printMany():void {
    for(let i=1; i<=100; i++){
        console.log(i);
    }
}
// printMany();

function printEvery3():void {
    for(let i=1; i<=88; i+=3){
        console.log(i);
    }
}
// printEvery3();

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

function isUpperCase(str:string):void {
    console.log(/[A-Z]/.test(str[0]));
}
// isUpperCase("C");

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

function findAllSmall(arr:number[],num:number):void {
    let result = [];
    for(let item of arr){
        if(item < num){
            result.push(item);
        }
    }
    console.log(result);
}
// findAllSmall([1, 3, 5, 4, 2], 4);

function sum (arr:number[]):void {
    let result = 0;
    for(let item of arr){
        result += item;
    }
    console.log(result);
}
// sum([-10, -20, -30]);

function addStars(num:number):void {
    let str = ['*']

    for(let i = 1; i<= num; i++){
        let result = str.join('');
        console.log(result);
        str.push('*');
    }
}
// addStars(1);


function makeStars(num:number):void {
    // 從 1 開始
    let str = ['*']

    for(let i = 1; i<= num; i++){
        // 紀錄下一輪應該要有幾個 *，例如目前是 1，下一輪應該出現 2 個 *
        let a = i + 1;

        // 先直接輸出目前結果，目前只有 *
        console.log(str.join(''));
        // 先加入 \n
        str.push("\\n");

        // 加入下一輪要的 *，下一輪是兩顆所以是 **
        while(a !== 0){
            str.push("*");
            a--;
        }
    }
}
// makeStars(5);

function stars2(num:number):void {
    if(num < 1){
        return;
    }

    new Promise<void>((resolve, reject) => {
        let result = "*";
        for(let i = 1; i <= num; i++){
            console.log(result);
            result += "*";
        }
        resolve();
    }).then(result=>{
        let array = [];
        let n = num - 1;
        while(n !== 0){
            array.push('*')
            n--;
        }
        
        for(let n = num-1; n!==0;n--){
            console.log(array.join(''));
            array.length--;
        }
    })
}
// stars2(10);

function table(num:number):void {
    for(let i = 1;i<10; i++){
    }
}
// table(3);

function table9to9():void {
    for(let i = 1;i<10; i++){
        for(let n = 1; n<10; n++){
            console.log(String(i) + " x " + String(n) +  " = " + String(i*n));
        }
    }
}
// table9to9();

// 要求印出指定 index 的費波那契數
function fib(index:number):void {

    // 如果 index 為 0，印出 0 並跳出函式
    if(index === 0){
        console.log(0);
        return;
    }
    // 視為已執行過一次，因此從 1 開始計數
    let times = 1;

    // 兩數相加的前項
    let first = 1;
    // 輸出解答，也是兩數相加的後項
    let result = 1;
    
    // 迴圈從第一項開始跑，跑指定 index-1 的次數（扣掉 0 項）
    while(times < index - 1){

        // 前項 + 後項（也是新後項的值）
        result = first + result;
        // 新前項為解答 - 原前項（也是原後項的值）
        first = result - first;

        // 例如：2、3、5
        // 前項為 2、後項 3，相加後為 5 也就是新的後項
        // 5 - 原前項 2 為 3，也就是新前項

        // 跑過一次迴圈 ++
        times++;
    }
    console.log(result)
}
// fib(0);

// 大小寫互換
function swap(str:string):void {
    let array = [];
    const pattern_b = /[A-Z]]?/;
    const pattern_s = /[a-z]?/
    for(let i=0; i <= str.length - 1; i++){
        
       if(){
           
       }
    }
}
swap("aLOHA");

export {}