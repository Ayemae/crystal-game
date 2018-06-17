$(document).ready(function () {

    // function resetGame() {
    //     goalNumber = 0;
    //     playerScore = 0;
    //     touch1value = 0;
    //     touch2value = 0;
    //     touch3value = 0;
    //     touch4value = 0;
    // };


    //Globals 
    var playerScore = 0;
    //var goalNumber is defined in-game

    var touch1value = 0;
    var touch2value = 0;
    var touch3value = 0;
    var touch4value = 0;

    var touchValues = [touch1value, touch2value, touch3value, touch4value];
    var uniqueTouchValues = []; //resurrect later?


    var winCount = 0;
    var lossCount = 0;
    var isGameOver = false;



//Game + Functions

    function getTouchValues() {
        for (var i = 0; i < touchValues.length; i++) {
            touchValues[i] = Math.floor(Math.random() * 12 + 1);
        }
        return touchValues;
    };
    // PseudeCode Amibitions for Touch Values:
    // There must be AT LEAST ONE ODD NUMBER
    // There must be AT LEAST ONE EVEN NUMBER
    // All values MUST BE UNIQUE
    // Otherwise, re-randomize touch values



    
    //define Values For Game
    var goalNumber = Math.floor(Math.random() * 101 + 19);
    getTouchValues();



    function checkForGameOver() {
        if (playerScore === goalNumber) {
            winCount++;
            isGameOver = true;
            console.log("You won!");
        }
        if (playerScore > goalNumber) {
            lossCount++;
            isGameOver = true;
            console.log("You lost!");
        }
        console.log(isGameOver);
        return isGameOver;
    };

    function ammendStats() {
        $("#score").html(playerScore);
        $("#wins").html("<p>Wins: " + winCount + "</p>");
        $("#losses").html("<p>Losses: " + lossCount + "</p>");
    };





    // Buttons

    $("#touch-0").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[0];
            ammendStats();
            checkForGameOver();
        }
    });

    $("#touch-1").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[1];
            checkForGameOver();
            ammendStats();
        }
    });

    $("#touch-2").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[2];
            checkForGameOver();
            ammendStats();
        }
    });

    $("#touch-3").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[3];
            checkForGameOver();
            ammendStats();
        }
    });



    //test
    console.log(touchValues);



    //print to page at game start
    $("#goal-no").html(goalNumber);
    $("#score").html(playerScore);
    $("#wins").html("<p>Wins: " + winCount + "</p>");
    $("#losses").html("<p>Losses: " + lossCount + "</p>");











}); //end doc.ready



// Welp, that was a waste of time.
        // for (var t = 0; t < 4; t++) {
        //     $('#touch-' + t).on("click", function () {
        //     playerScore = playerScore + touchValues[t];
        //     console.log(playerScore);
        // });

