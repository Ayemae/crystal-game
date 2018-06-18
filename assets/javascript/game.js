$(document).ready(function () {



    //Globals 
    var playerScore = 0;
    var goalNumber = 19;

    var touch1value = 1;
    var touch2value = 1;
    var touch3value = 1;
    var touch4value = 1;

    var touchValues = [touch1value, touch2value, touch3value, touch4value];
    var uniqueTouchValues = []; //resurrect later?

    var message = "";
    var meterFilled = 0;

    var winCount = 0;
    var lossCount = 0;
    var isGameOver = false;



    //Game + Functions

    // function getTouchVal() {
    //         return Math.floor(Math.random() * 12 + 1);
    // } // end getUniqueVals



    // function isOdd(num) { return num % 2; };
    // for (var i = 0; i < touchValues.length; i++) {
    //     if (touchValues.indexOf(isOdd(touchValues[i]))) {
    //         return touchValues;
    //     }
    //     else {
    //         randomizeValues();
    //     }
    // }
    // PseudeCode Amibitions for Touch Values:
    // All values MUST BE UNIQUE
    // There must be AT LEAST ONE ODD NUMBER
    // Otherwise, re-randomize touch value(s)





    function resetGame() {
        goalNumber = Math.floor(Math.random() * 101 + 19);
        for (var i = 0; i < touchValues.length; i++) {
            touchValues[i] = Math.floor(Math.random() * 12 + 1);
        }
        playerScore = 0;
        meterFilled = 0;
        isGameOver = false;
        $("#meter-filled").animate({ height: meterFilled + "%" });
        updateStats();
        console.log(touchValues);
    };

    function fillMeter(s, g) {
        var a = s / g;
        meterFilled = Math.round(a * 100);
        return meterFilled;
    }


    resetGame();

    function checkForGameOver() {
        if (playerScore === goalNumber) {
            winCount++;
            isGameOver = true;
            $("#outcome-msg").html("Great job!");
            popUp();
        }
        if (playerScore > goalNumber) {
            lossCount++;
            isGameOver = true;
            $("#outcome-msg").html("Oops. Try again?");
            popUp();
        }
        return isGameOver;
    };



    function updateStats() {
        $("#goal-no").html(goalNumber);
        $("#score").html(playerScore);
        $("#wins").html("<p>Successfully Bottled Potions: " + winCount + "</p>");
        $("#losses").html("<p>Biohazard Spillage: " + lossCount + "</p>");
        console.log(meterFilled + "%");
    };



    // Touch Buttons

    // DRY version but it's broken.  :C
    // $(".touchbtn").on("click", function () {
    //     var val = $(this).val();
    //     if (isGameOver === false) {
    //         playerScore = playerScore + touchValues[val];
    //         checkForGameOver();
    //         fillMeter(playerScore, goalNumber);
    //         $("#meter-filled").animate({ height: meterFilled + "%" });
    //         updateStats();
    //     }
    // });

    $("#touch-0").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[0];
            checkForGameOver();
            fillMeter(playerScore, goalNumber);
            $("#meter-filled").animate({ height: meterFilled + "%" });
            updateStats();
        }
    });

    $("#touch-1").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[1];
            checkForGameOver();
            fillMeter(playerScore, goalNumber);
            $("#meter-filled").animate({ height: meterFilled + "%" });
            updateStats();
        }
    });

    $("#touch-2").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[2];
            checkForGameOver();
            fillMeter(playerScore, goalNumber);
            $("#meter-filled").animate({ height: meterFilled + "%" });
            updateStats();
        }
    });

    $("#touch-3").on("click", function () {
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[3];
            checkForGameOver();
            fillMeter(playerScore, goalNumber);
            $("#meter-filled").animate({ height: meterFilled + "%" });
            updateStats();
        }
    }); // end Touch buttons



    //print to page at game start
    $("#goal-no").html(goalNumber);
    $("#score").html(playerScore);

    $("#outcome-msg").html(message);

    $("#wins").html("Wins: " + winCount);
    $("#losses").html("Losses: " + lossCount);


    $("#reset").on("click", function () {
        resetGame();
    });


}); //end doc.ready

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

