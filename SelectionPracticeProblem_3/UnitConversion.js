var number;
var choice;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`Enter "1 for convert Feet to inch" , "2 for Feet to meter" , "3 for Inch to feet" , "4 for Meter to feet" :   \n`, value => {
    console.log(`Choice is ${value}`)
    choice=parseInt(value);

    readline.question(`Enter the number for unit conversion `, value => {
        console.log(`Number is ${value}`)
        number=parseInt(value);
        unitConversion(choice,number);
        readline.close()
    })
  })

const meterConversion=3.28
const inchConversion=12
  

function unitConversion(choice,number){
    var convert;
    switch(choice){
        case 1:
            convert = number*inchConversion;
            console.log("Feet to inch conversion is: "+convert.toFixed(2));
            break;
        case 2:
            convert = number/meterConversion;
            console.log("Feet to meter conversion is: "+convert.toFixed(2));
            break;
        case 3:
            convert = number/inchConversion;
            console.log("Inch to feet conversion is: "+convert.toFixed(2));
            break;
        case 4:
            convert=number*meterConversion;
            console.log("Meter to feet conversion is: "+convert.toFixed(2));
            break;
        default:
            console.log("Wrong Input");
            break;
    }
}
