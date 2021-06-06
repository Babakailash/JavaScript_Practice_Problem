var a,b,c;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter first Number: ", num1 =>{
   a = parseInt(num1);


readline.question("Enter second Number: ", num2 =>{
  b = parseInt(num2);


readline.question("Enter third Number: ", num3 =>{
  c = parseInt(num3);


     arithmetic(a,b,c);
   readline.close();
      })
   })
})

function arithmetic(a,b,c) {
  var Op1 =a+b*c;
   console.log(Op1);

  var Op2 =a%b+c;
   console.log(Op2);

  var Op3 =c+a/b;
  console.log(Op3);

  var Op4 = a*b+c;
  console.log(Op4);

if(Op1 > Op2 && Op1 > Op3 && Op1 > Op4)
 console.log("Op1 is maximum");
else if  (Op2 > Op1 && Op2 > Op3 &&  Op2 > Op4)
 console.log("Op2 is maximum");
else if (Op3 > Op1 && Op3 > Op2 &&  Op3 > Op4)
 console.log("Op3 is maximum");
else 
     console.log("Op4 is maximum");


if(Op1 < Op2 && Op1 < Op3 && Op1 < Op4)
 console.log("Op1 is minimum");
else if  (Op2 < Op1 && Op2 < Op3 &&  Op2 < Op4)
 console.log("Op2 is minimum");
else if (Op3 < Op1 && Op3 < Op2 &&  Op3 < Op4)
 console.log("Op3 is minimum");
else
     console.log("Op4 is minimum");
}
