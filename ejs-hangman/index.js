const express = require('express');
const app = express();
const port = process.argv[2] || 8080;

let words = [
    'hey',
    'person',
    'you',
    'think',
    'youre',
    'better',
    'than',
    'me'
];

let answer;
let nWrong;
let pastGuesses = [];
let pastGames = [];
let cont = true;
let won = false;
let gameStats = {};
let guess;
let wonCount = 0,
    lostCount = 0;
let answer_string = '';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(port);
app.get('/game', function (req, res) {
    if (g = req.query.guess) {
        checkGuess(g);
        let data = {
            hangman: printHangMan(nWrong),
            answer_string: answer_string,
            success: won,
            game_over: checkGameOver()
        }
        return res.send(data);
    }
    let data = {
        hangman: printHangMan(nWrong),
        answer_string: answer_string
    }
    res.render('game', data);
})

app.get('/game/new', function (req, res) {
    setUpGame();
    let data = {
        hangman: printHangMan(nWrong),
        answer_string: answer_string
    }
    return res.send(data);
});


/**
 * @summary Constructor function to create game object
 */
function Games(attempts, result, guesses, won) {
    this.attempts = attempts;
    this.result = result;
    this.guesses = guesses;
}

function checkGuess(guess) {
    let match = false;
    //check if it is in pastguesses else add to it
    if (pastGuesses.indexOf(guess) !== -1) {
        console.log('The letter is already guessed ', guess);
        match = true;
    }

    if (!match) {
        pastGuesses[pastGuesses.length] = guess;
        console.log(pastGuesses);
        let found;

        if (answer.indexOf(guess) !== -1) {
            found = true;
            console.log("You found a relevant number");
        }

        if (!found) {
            console.log("Oops! Incorrect Choice. Please try again");
            nWrong++;
        }
    }
    printGameState();
}


setUpGame();
printGameState();


/**
 * @summary Prints the hangman.
 */
function printHangMan(nWrong) {
    const headSpot = (nWrong > 0) ? "O" : " ";
    const bodySpot = (nWrong > 1) ? "|" : " ";
    const leftArm = (nWrong > 2) ? "/" : " ";
    const rightArm = (nWrong > 3) ? "\\" : " ";
    const leftLeg = (nWrong > 4) ? "/" : " ";
    const rightLeg = (nWrong > 5) ? "\\" : " ";

    let str = "";

    return " ___ " + "<br>" + " |&nbsp;&nbsp;| " + "<br>" + " |  " + headSpot + " " + "<br>" + " | " + leftArm + bodySpot + rightArm + "<br>" + " | " + leftLeg + " " + rightLeg;

}


/**
 * @summary Sets defaults for the start of new game.
 */
function setUpGame() {
    // choose a new word
    answer = getRandomWord().split('');
    console.log(answer);
    // reset the total of wrong guesses
    nWrong = 0;
    won = false;
    // empty our array of previously guessed letters
    pastGuesses = [];
    printHangMan();
    printGameState();
}

/**
 * @summary Choose random word from array of words.
 */
function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

/**
 * @summary Prints the state of game after every guess.
 */
function printGameState() {
    //Add a console.log here to print the previous guesses.
    //console.log('\n');
    let str = checkInputStatus();
    console.log(str);
    answer_string = str;
    printHangMan(nWrong);

}

/**
 * @summary Checks if the guessed letter is correct and if the collection of letters input by user matches the answer.
 */
function checkInputStatus() {
    let str = "";
    let counter = 0;
    // for each letter in the target word
    for (let i = 0; i < answer.length; i++) {
        let found = false;
        // loop through the pastGuesses
        for (let j = 0; j < pastGuesses.length; j++) {
            // and check each element of past guesses to see if it matches the
            if (answer[i] === pastGuesses[j]) {
                found = true;
            }
        }
        if (found) {
            str += answer[i];
            str += "\t";
            counter++;
        } else {
            str += "__\t";
        }
    }
    if (counter === answer.length) {
        won = true;

    }
    return str;
}


/**
 * @summary Checks if the game is over
 */
function checkGameOver() {
    checkInputStatus();
    gameStats = {
        'attempts': answer.length + nWrong,
        'guessedLetters': pastGuesses
    }
    if (won) {
        gameStats.result = 'Won';
    } else {
        gameStats.result = 'Lost';
    }
    console.log("Checking...")
    console.log("tries: " + nWrong);
    if ((nWrong >= 6) || (won)) {
        /**/
        //outputResults();
        return true;
    }

    return false;
}


