const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a Number for Week day (1 to 7): ", num =>{
  numberToWeekDay(parseInt(num));
   readline.close();
})

 function numberToWeekDay(num) {
    switch(num) {
        case 1:
          console.log("Monday");
          break;

       case 2:
          console.log("Tuesday");
          break;

      case 3:
          console.log("Wednesday");
          break;

     case 4:
          console.log("Thursday");
          break;
    case 5:
          console.log("Friday");
          break;
    case 6:
          console.log("Saturday");
          break;
     case 7:
          console.log("Sunday");
          break;
        default:
         console.log("Invalid Input !,Enter under 1 to 7,");
         break;
   }
}
