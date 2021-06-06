const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a Number(1,10,100...) type : ", num =>{
  numberToWord(parseInt(num));
   readline.close();
})

 function numberToWord(num) {
    switch(num) {
        case 1:
          console.log("Unit");
          break;

       case 10:
          console.log("Tens");
          break;

      case 100:
          console.log("Hundreds");
          break;

     case 1000:
          console.log("Thousands");
          break;
    case 10000:
          console.log("Ten Thousands");
          break;
    case 100000:
          console.log("Lakhs");
          break;
     case 1000000:
          console.log("Ten Lakhs");
          break;
     case 10000000:
          console.log("Crores");
           break;
     case 100000000:
          console.log("Ten Crores");
         break;
      case 1000000000:
        console.log("Arabs");
       break;
       default:
       console.log("Enter Valid Number in Multiple Tens !!!");
        break;
    }
 }
