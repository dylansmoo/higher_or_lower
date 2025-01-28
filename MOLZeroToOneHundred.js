

/* 0 - 10 game
if they get it wrong keep aksing them until they get it right.
if they get it right congratulate them and ask if they want to play again
and if at any time they cancel stop the game and tell tghem to refgresh to start again
remember parseInt and isNaN and while loop. 

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
function zeroToOneHundred() {
    function playGame() {
        alert("Welcome to more or less.. This game is simple. Your mission is to find the randomly generated number between 0 and 100. You only have 5 attempts to find the correct number. Good luck!");

        const startGame = confirm("Are you ready to play?");
        if (!startGame) {
            alert("GAME OVER. Try again");
            return;
        }
        const randomNumber = getRandomIntInclusive(0, 100);


        let counter = 0;
        const maxAttempts = 6;

        {
            let playGame = true;
            while (playGame && counter != maxAttempts) {

                let userInput = prompt(`Guess the number between 0 and 100. ${maxAttempts - counter} attempts remaining.`);
                let userNum = parseInt(userInput);
                if (isNaN(userNum)) {
                    alert("That is not a valid number. GAME OVER!");
                } else if (userNum > 100 || userNum <= -1) {
                    alert("That is not a valid number. GAME OVER!");
                    return;
                }
                if (userNum == randomNumber) {
                    counter++;
                    alert(`congratulations you found the number! It only took you ${counter} attempts. Refresh your browser to start a new game`);
                    return;
                } else if (userNum < randomNumber) {
                    counter++;
                    alert(`Too low. You have ${maxAttempts - counter} attempts left`);
                } else if (userNum > randomNumber) {
                    counter++
                    alert(`Too high. You have ${maxAttempts - counter} attempts left`);
                } else {
                    return;
                }
            }
        }
    }

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    playGame();

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