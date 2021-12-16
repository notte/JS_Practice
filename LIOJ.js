var readline = require('readline');

var lines = []
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function(line) {
    lines.push(line)
});

rl.on('close', function() {
    solve(lines)
})

function solve(lines) {
}

/*
以累加的方式，先設定一個陣列為答案
設定變數 one 為增加一樓層
設定變數 two 為增加兩樓層

因為無論有幾層樓，一定可以被 +1+1+1 給爬完
所以不去驗證這個結果

設定兩種爬的方始，以 +1 為開始 or +2 為開始

以 +1 為開始
如果剩餘的樓層大於等於 2，就 +2，小於就 +1，等於 0 就跳出
目標層數是 4：1 -> 2 -> 4
目標層數是 3：1 -> 2 -> 3
目標層數是 2：1 -> 2 -> 跳出
*/