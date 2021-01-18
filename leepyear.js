// const year = 4001;
// let  remainder = year % 4;

// if(remainder == 0){
//     console.log('Your year is a leap year');
// }
// else{
//     console.log('Your year is not a leap year');
// }

//aaaa
function isLeapYear(year){

    if(year % 4 == 0){
        return true;
    } 
    else if(year % 400 == 0){
        return true;
    }
    else if(year % 100 == 0){
        return false;
    }
    else{
        return false;
    }
}

var check = isLeapYear(1700);
console.log(check);