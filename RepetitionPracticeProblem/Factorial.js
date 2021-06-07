"use strict"
const ps = require("prompt-sync");
const prompt = ps();

let  num = prompt("Enter the Number : ");

if (num === 0 || num === 1)
return 1;
for (var i = num - 1; i >= 1; i--) {
num *= i;
console.log( i+ "="+num);

}



    