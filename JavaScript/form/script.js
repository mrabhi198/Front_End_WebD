var a = 16;
var b = 8;
/*var sum = a + b;
var sub = a - b;
var mul = a * b;
var div = a / b;
var mod = a % b;
var exp = a ** b;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log(exp);*/

/*console.log(9 > 10 || 9 < 10);
console.log(9 > 10 && 9 < 10);
console.log(!(9 > 10));*/

/*var a = 10;
var b = 19;
console.log("sum of a and b is " + (a + b));
// console.log();*/

//ternary operators
/*var c = a > b ? "yes" : "no";
console.log(c);*/

//popup validation
/**
 1. alert
2. confirm
3. prompt
 */

// var a = alert("Lets gets started");

// var name = "Abhinav Alok";
// var msg = "";
// for (var i = 0; i < 5; i++){
//     msg += name + "\n";
// }
var a = confirm("Lets Gets Started");
// var n = 5;
if (a) {
    // for(var i = 1; i < 6; i++){
    //     document.write(i+ ".hie " );
    // }
    // document.write("Alok")

    var age = prompt("enter your name: ");
    if(age !== null){
        document.write("My age is " + age);
    }
}
else{
    document.write("Abhinav");
}
