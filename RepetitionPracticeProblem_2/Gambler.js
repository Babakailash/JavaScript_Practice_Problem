var balance = 100;
var placeBet = 1;
var won = 0;
var lost = 0;
var totalbet=0;

while(balance > 0 && balance < 200){
    totalbet++;
    
    var bet = Math.floor(Math.random() * 10) % 2;
    
    switch(bet ){
        case 1:

        balance++;
        console.log("Won");
        won++;
        break;
    
    case 0:
        balance--;
        console.log("Lost");
        lost++;
        break;
    
    }
    console.log("Total bet is  : " + (won + lost));
    console.log("Number of bet is won is : " + won);
    console.log("Number of bet is lost is : " + lost);
    console.log("Total Bet: "+totalbet);
  console.log("Balance: "+balance);
}

