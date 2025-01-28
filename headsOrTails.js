/*
#1: Alert with instructions for how to play the game
#2: Confirm "Are you ready to play?"
    #2b: if no stop game with an alert;
#3: generate a random number between 0 and 10
#4: prompt Asking for their answer
    #4b: if they click cancel alert and stop game
#5: turn string number into an integer using parseInt()
    #5b: if NaN alert "thats not a number" and end game
#6: check if true 
    #6b: if true alert "congratulations you finished the game"
    #6c: if false alert "better luck next time"
*/

// when you call a function that has parameters you pass arguments into the function (terminology)
function headsOrTails() {
    function playGame() {
        alert("Welcome to heads and tails. This game is simple. Pick heads or tails. If you pick correct. You win. If you pick incorrect then you LOSE!");

        const startGame = confirm("Are you ready to play?");
        if (!startGame) {
            alert("GAME OVER. Try again");
            return; //exits function
        }
        let keepPlaying = true;
        while (keepPlaying) {
            const randomNumber = getRandomIntInclusive(0, 1);
            const headsOrTails = randomNumber ? "heads" : "tails";

            const userAnswer = prompt("Heads or Tails?");
            if (userAnswer == null) {
                alert("game ended. Try again");
                keepPlaying = false;
                return;
            }
            if (userAnswer.toLowerCase() == headsOrTails) {
                alert("You win! Ready for another round?");
            } else {
                alert("You lose! Try again.");
            }
        }
    }

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }


    playGame(); //call the function

}





// console.log("hi");  

// alert("Read this");
// const userInput = prompt("Enter something", "And something else");
// confirm("confirm something");
// console.log(userInput);

// const confirmedStatement = confirm("did you have fun?")
// console.log(confirmedStatement);


// const userNum = parseInt(userInput);
// if (isNaN(userNum)) {
//     console.log("Not a number");
// } else {
//     console.log(userNum);
// }