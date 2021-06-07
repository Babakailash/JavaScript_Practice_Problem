"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter the number for prime check : ");

for(var i=2; i<=num ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j == 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime == true){
            console.log(i);
        }
}

