// 5! = 1*2*3*4*5
// var factorial = 1;
// for(var i=1; i<=10; i++){
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

//==Using Function==//
function factorial(n){
    var fact = 1;
    for(var i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}
var result = factorial(6);
console.log(result);


//=====Using While loop===//
// var i = 1;
// var factorial = 1;
// while(i <= 5){
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);




function factorial(n){
    var i = 1;
    var fact = 1;
    while(i <= n){
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorial(5);
console.log(result);