
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter the Number : ");
//console.log(num);
    
    let harmonic=0;
    let i ; 
    for(i = 1; i <= num; i++){
            harmonic += " +" + '1/'+i;



    }    
    console.log(harmonic);  


