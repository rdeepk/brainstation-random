var gameStats = {};
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
            gameStats = data.stats;
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

    if (success) {
        $('.message').html("Well played! You have won");
        $('.message').css({
            "color": "green"
        });
    } else {
        $('.message').html("Sorry, you have been hanged! The answer was<br>"+ gameStats.answer);
        $('.message').css({
            "color": "red"
        });
    }
    $('.pipe').css({
        "display": "inline"
    });
    $('.guesses').css({
        "display": "block"
    });
    $('.played').html("Played: " + Number(gameStats.wonCount) + Number(gameStats.lostCount));
    $('.won').html("Won: " + gameStats.wonCount);
    $('.lost').html("Lost: " + gameStats.lostCount);
    $('.guesses').html("Letters Guessed: " + gameStats.guessedLetters);
}
