var goalNumber = 0;
var playerScore = 0;


var touch1 = $("#touch-1");
var touch1value = 0;

var touch2 = $("#touch-2");
var touch2value = 0;

var touch3 = $("#touch-3");
var touch3value = 0;

var touch4 = $("#touch-4");
var touch4value = 0;

var touchValues = [touch1value, touch2value, touch3value, touch4value];
var uniqueTouchValues = [];


var winCount = 0;
var lossCount = 0;


function getTouchValues() {
    for (var i = 0; i < touchValues.length; i++) {
        touchValues[i] = Math.floor(Math.random() * 12 + 1);
    }
    $.each(touchValues, function (i, el) {
        if ($.inArray(el, uniqueTouchValues) === -1) uniqueTouchValues.push(el);
    });
    if (uniqueTouchValues.length == 4) {
    return uniqueTouchValues;}
    else {
        return;
    }
};

    


// Game

$(document).ready(function () {

    // function resetGame() {
    //     goalNumber = 0;
    //     playerScore = 0;
    //     touch1value = 0;
    //     touch2value = 0;
    //     touch3value = 0;
    //     touch4value = 0;
    // };

    //function startNewGame() {
    var goalNumber = Math.floor(Math.random() * 101 + 19);
    getTouchValues();


    //};
    //resetGame();
    //startNewGame();

    //test
    console.log(goalNumber);

    console.log(uniqueTouchValues);




}); //end doc.ready




goalNumber = $("#goal-no");
playerScore = $("#score");

