"use strict";
const ps= require("prompt-sync");
const prompt= ps();

let num = prompt("Enter the number: ")
    var a =1;
    var b =2;
   var i=0;
    for(var i=0; i< num; i++) {
        a *= b;

        console.log(a);

    }

