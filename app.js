'use strict';
var Name = prompt("Please Enter your Name: ");
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
}

