///===//
/*var n = 128;
for(i = 2; i < n; i++){
    // console.log(i, n % i);//
    if(n % i == 0){
        console.log('Not a Prime Number');
        break;
    }
}
console.log('Your number is a prime number');
*/

///==Using function=//

function isPrime(n){
    for(i = 2; i < n; i++){
        // console.log(i, n % i);//
        if(n % i == 0){
            return 'Not a Prime Number';
        }
    }
    return 'Your number is a prime number';
}
var result = isPrime(4);
console.log(result);