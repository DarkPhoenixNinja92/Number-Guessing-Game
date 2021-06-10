let randomNum = () => {

    var rand = Math.floor(Math.random() * 10 + 1);
    var guess = prompt("Pick a number!");

    while (guess != rand) {
        alert("Sorry. That's not it! Try again.")
        guess = prompt("Pick a number!");
    }
    alert("Congrats! You got it right.")
}

randomNum();

var answer = prompt("Would you like to play again?");
if (answer == "yes") {
    randomNum();
}