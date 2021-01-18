//===Inch to Feet====//
//Simple way
var inch = 156;
var feet = inch/12;
console.log(feet);


//Professional way using function
function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var myFeet = inchToFeet(156);
console.log(myFeet);
var anotherFeet = inchToFeet(180);
console.log(anotherFeet);
var childFeet = inchToFeet(210);
console.log(childFeet);



//=====using array with function
function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var senior = [156, 180, 210];
var myFeet = inchToFeet(senior[0]);
console.log(myFeet);
var anotherFeet = inchToFeet(180);
console.log(anotherFeet);
var childFeet = inchToFeet(210);
console.log(childFeet);