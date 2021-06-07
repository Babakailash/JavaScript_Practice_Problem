"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter the positive Number:  ");
var i;
for(i=1;i<=num;i++){
    if(num%i==0){
        console.log(i);

    }
}