//fobo[2] = fibo[2-1] + fibo[2-2]
//fibo[5] = fibo[5-1] + fibo[5-2]
//fibo[i] = fibo[i-1] + fibo[i-2]

//====Using Loop====//
var fibo = [0, 1];
for(var i = 2; i <= 12; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
}

console.log(fibo);



//===Using Function====//