$(document).ready(function () {



    //Globals 
    var playerScore = 0;
    var goalNumber = 19;

    var touchValues = [1, 2, 3, 4];
    var randNum = [0, 0, 0, 0];

    var message = "";
    var meterFilled = 0;

    var winCount = 0;
    var lossCount = 0;
    var isGameOver = false;
    var gameLost = false;
    var gameWon = false;



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
        gameLost = false;
        gameWon = false;
        $("#meter-filled").animate({ height: meterFilled + "%" }, { duration: 1 });
        pulseGlow();
        spillOver();
        updateStats();
        console.log(touchValues);
    };

    function fillMeter(s, g) {
        var a = s / g;
        meterFilled = Math.round(a * 100);
        return meterFilled;
    }




    function checkForGameOver() {
        if (playerScore === goalNumber) {
            winCount++;
            isGameOver = true;
            gameWon = true;
            pulseGlow();
            $("#outcome-msg").html("Great job!");
            popUp();
        }
        if (playerScore > goalNumber) {
            lossCount++;
            isGameOver = true;
            gameLost = true;
            spillOver();
            $("#outcome-msg").html("Oops. Try again?");
            popUp();
        }
        return isGameOver;
    };



    function updateStats() {
        $("#goal-no").html(goalNumber);
        $("#score").html(playerScore);
        $("#wins").html("<p>Successfully Bottled Potions: " + winCount + "</p>");
        $("#losses").html("<p>Biohazard Spills: " + lossCount + "</p>");
    };



    resetGame();

    // Touch Buttons

    $(".touchbtn").on("click", function () {
        var val = $(this).attr("value");
        if (isGameOver === false) {
            playerScore = playerScore + touchValues[val];
            checkForGameOver();
            fillMeter(playerScore, goalNumber);
            $("#meter-filled").animate({ height: meterFilled + "%" }, { duration: 110 });
            updateStats();
        }
    });



    //print to page at game start
    $("#goal-no").html(goalNumber);
    $("#score").html(playerScore);

    $("#outcome-msg").html(message);


    $("#reset").on("click", function () {
        resetGame();
    });

    function pulseGlow() {
        if (gameWon === true) {
            function showGlow() {
                $("#meter").addClass("glow");
            }
            setTimeout(showGlow, 115);
        }
        else { $("#meter").removeClass("glow"); }
    };

    function spillOver() {
        if (gameLost === true) {
            function showSpill() {
                $("#spill").addClass("show");
            }
            setTimeout(showSpill, 115);
        }
        else { $("#spill").removeClass("show"); }
    };

}); //end doc.ready

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

