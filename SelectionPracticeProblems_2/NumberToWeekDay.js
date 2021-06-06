const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a  Single digit Number (1 to 7) : ", num=>{
    numberToWeekDay(num);
    readline.close();
})

  function numberToWeekDay(num) {
    if (num == 1)
       console.log("Monday");
    else if (num == 2)
       console.log("Tuesday");
    else if(num == 3)
     console.log("Wednesday");
     else if(num== 4)
    console.log("Thursday");
     else if (num ==5)
     console.log("Friday");
     else if (num==6)
     console.log("Saturday");
     else if (num==7)
    console.log("Sunday");
       else
       console.log("Wrong Number Insert,Please Enter Right number for WeekDay ");
}


