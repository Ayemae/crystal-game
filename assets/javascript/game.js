$(document).ready(function () {



    //Globals 
    var playerScore = 0;
    var goalNumber = 19;

    var touchValues = [1, 1, 1, 2];

    var message = "";
    var meterFilled = 0;

    var winCount = 0;
    var lossCount = 0;
    var isGameOver = false;



    //Game + Functions

    function getTouchVals() {
        for (var i = 0; i < touchValues.length; i++) {
            touchValues[i] = Math.floor(Math.random() * 12 + 1);
        }
        // Ensure that there's always 1 or 3 odd numbers in the button values.
        // This is so that the goal number could virtually always be met.
        if ((touchValues[0] + touchValues[1] + touchValues[2] + touchValues[3]) % 2 === 0) {
            var j = touchValues.indexOf(Math.max(...touchValues));
            touchValues[j] = touchValues[j] - 1;
            // On the off-chance that the whole array was 1s, change the now-0 to 2.
            if (touchValues[j] === 0) {
                touchValues[j] = (touchValues[j] + 2);
            }
        }
        return touchValues;
    }


    function resetGame() {
        goalNumber = Math.floor(Math.random() * 101 + 19);
        getTouchVals();
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


    $("#reset").on("click", function () {
        resetGame();
    });


}); //end doc.ready

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

