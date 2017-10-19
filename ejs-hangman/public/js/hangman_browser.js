
/**
 * @summary Handler after user choose a letter.
 */
function sendGuess(id) {
    guess = id.toLowerCase();
    $('.letters .' + id + ' a').css({
        "pointer-events": "none",
        "color": "red"
    });

    $.get( "/game?guess="+guess, function(data) {
        console.log(data);
        if(!data.success && !data.game_over) {
            $('.answer-string').html(data.answer_string);
            $('.hangman').html(data.hangman);
        } else {
            $('.answer-string').html(data.answer_string);
            $('.hangman').html(data.hangman);
            gameOver(data.success);
        }
      });
}

/**
 * @summary Sets defaults for the start of new game.
 */
function setUpGame() {
    $('.letters a').css({
        "pointer-events": "auto",
        "color": "#007bff"
    });
    $('.answer-string').html("");
    $('.guesses').css({
        "display": "none"
    });

    $.get( "/game/new", function(data) {
        $('.answer-string').html(data.answer_string);
        $('.hangman').html(data.hangman);
    });
}

/**
 * @summary Display the Results after game is over.
 */
function gameOver(success) {
    $('.letters a').css({
        "pointer-events": "none"
    });
    //pastGames.push(new Games(gameStats.attempts, gameStats.result, gameStats.guessedLetters));
    if (success) {
        $('.message').html("Well played! You have won");
        $('.message').css({
            "color": "green"
        });
        //wonCount++;
    } else {
        $('.message').html("Sorry, you have been hanged! The answer was<br>");
        $('.message').css({
            "color": "red"
        });
        //lostCount++;
    }
    //console.log('Your Game statistics: ' + JSON.stringify(gameStats));
    //console.log('Your Past Games: ' + JSON.stringify(pastGames));
    $('.pipe').css({
        "display": "inline"
    });
    $('.guesses').css({
        "display": "block"
    });
    $('.played').html("Played: " + pastGames.length);
    $('.won').html("Won: " + wonCount);
    $('.lost').html("Lost: " + lostCount);
    $('.guesses').html("Letters Guessed: " + pastGuesses);
}
