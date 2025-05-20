function rollDice() {
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;

    var dice1 = document.getElementById("dice-1");
    var dice2 = document.getElementById("dice-2");
    var resultTitle = document.getElementById("results");


    dice1.src = "images/dice" + randomNumber1 + ".png";
    dice2.src = "images/dice" + randomNumber2 + ".png";
   
    if (randomNumber1 > randomNumber2) {
        resultTitle.textContent = "Player 1 Wins! 🎉";
    } else if (randomNumber2 > randomNumber1) {
        resultTitle.textContent = "Player 2 Wins! 🙌🏻";
    } else {
        resultTitle.textContent = "It's Fair, Please Roll Again~";
    }
}


rollDice();
