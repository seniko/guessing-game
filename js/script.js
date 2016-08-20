/**
 * Created by Пользователь on 19.08.2016.
 */
var target;
var guessInput;
var guesses = 0;
var finished = false;

function doGame() {
    target = Math.floor(Math.random() * 100) + 1;
    while (!finished) {
        guessInput = + prompt("I'm thinking of a number in the range 1 to 100\n\n" +
            "What is the number?", "");
        guesses++;
        finished = checkGuess();
    }
}
function checkGuess() {
    if (isNaN(guessInput)) {
        alert("You have not entered a number.\n" + "Please enter a number in the range 1 to 100.");
        return false;
    }
    if (guessInput < 1 || guessInput > 100) {
        alert("Wrong range.\n" + "Please enter a number in the range 1 to 100.");
        return false;
    }
    if (guessInput > target) {
        alert("Too high!");
        return false;
    }
    if (guessInput < target) {
        alert("Too low!");
        return false;
    }
    if (guessInput == target) {
        alert("You got it! The number is: " + target + "\nNumber of guesses is: " + guesses);
        return true;
    }
}
