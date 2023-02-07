'use strict';

/*var Name = prompt("Please Enter your Name: ");
var gender = prompt("Please Enter your Gender either male or female ");
var confirming = confirm("Would You Like to Skip Welcoming");
if(confirming==true)
{
    console.log(confirming)
}
 else if(confirming==false){
if  (gender =="male")
{
    alert ("Welcome to my website MR "+ Name);
}
else if (gender =="female")
{
    alert ("Welcome to my website MS "+ Name);
}
else{
    alert ("Welcome to my website  ");
}   
 }
var age = prompt("Please Enter your Age");
if (age <=0)
{
    alert ("You entered age is less than or equal to zero!!")
}*/
var result;
var string1=" DO you think TODO  is a good website?";
var string2="Do you have previous knowldge about us?";
var string3="would you like to join US ";
function fun(str)
{
var feedback = prompt(str);
// switch(feedback){
//     case "Yes" :
//         console.log(feedback)
//         break;
//         case "No":
//          console.log(feedback)
//         break;
//        default:
// console.log("invalid")
// break;
// }
if (feedback =="Yes" ||feedback =="No"){
result =feedback;
}
else{
result = "invalid";
}
console.log(result)
let arr =[result]
console.log(arr)
return result;

// let arr=[result];
}

fun (string1)
fun (string2)
fun (string3)
// console.log("hi");
// let text = "";
// let i = 0;
// do {
//   text += result + " "; //text = text + i + " ";
//   i++;
// }
// while (i < 3);
// console.log(tresult);


