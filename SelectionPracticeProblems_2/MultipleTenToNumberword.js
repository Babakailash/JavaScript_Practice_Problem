const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter multiple ten number (1,10,100,1000...) type: ", num=>{
    numberToWord(num);
    readline.close();
})

  function numberToWord(num) {
    if (num == 1)
       console.log("Unit");
    else if (num == 10)
       console.log("Tens");
    else if(num == 100)
     console.log("Hundreds");
     else if(num== 1000)
    console.log("Thousands");
     else if (num ==10000)
     console.log("Ten Thousands");
     else if (num==100000)
     console.log("Lakhs");
     else if (num==1000000)
    console.log("Ten Lakhs");
     else if(num==1000000)
    console.log("Crores");
      else if (num ==100000000)
    console.log("Ten Crores");
      else if (num==1000000000)
    console.log("Arab");
       else
       console.log("Please enter under 1 Arab, Do not cross your Limit, OK! ");
}


