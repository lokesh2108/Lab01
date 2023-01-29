var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Heads or Tails");
var result;



 (coinFlip < 5) ? result = "Heads" : result = "Tails"; 
if(result == "Heads" && choice == "Heads") {
    window.document.write("The flip was heads and you chose heads...you win!");
}
else if(result == "Heads" && choice == "Tails") {
    window.document.write("The flip was heads but you chose tails...you lose!");
}
else if(result == "Tails" && choice == "Heads") {
    window.document.write("The flip was tails but you chose heads...you lose!");
}
else if(result == "Tails" && choice == "Tails") {
    window.document.write("The flip was tails and you chose tails...you win!");
}
