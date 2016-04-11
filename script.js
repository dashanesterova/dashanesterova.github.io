"use strict";

//some function keep track of current players turn x or o
// function to check for a win
// starting new game


var turn;
var playing = false
$(document).ready(function() {
    console.log("ready!")

    $("#new-game").click(function() {
        playing = true
        //it makes all the boxes blank
        $(".box").text("")
        //first turn is always x
        turn = "X"

        $(".box").click(function(event) {
            //if the game is still going
            if (playing == true) {
                //it selects the box
                var box = event.toElement;
                console.log('regular:', box)
                var $box = $(box)
                console.log('jq:',$box)
                var blank = ""

                //we want to check if it's blank if we can still play
                if ($box.text() == blank) {
                    //make turn X so the next move O
                    if ("X" == turn) {
                        $box.text("X")
                        turn = "O"

                    } else if ("O" == turn) {
                        $box.text("O")
                        turn = "X"
                    }
                }
                checkWin()
            }


        })
    })
});



var checkWin = function() {
    //combos: columns, rows and diagnals
    var allCombos = [$(".col1"), $(".col2"), $(".col3"), $(".row1"), $(".row2"), $(".row3"), $(".diagnal1"), $(".diagnal2")]

    //go through all of the combos
    allCombos.forEach(function(children) {

        //all have to be equal but not equal to blank
        var winner = children[0].innerHTML != "" && (children[0].innerHTML == children[1].innerHTML) && (children[2].innerHTML == children[1].innerHTML)
        if (winner) {
            //telling us whoever won X or O
            var win = children[0].innerHTML
                //Telling us who is the winner
            alert(win + " Winner!")
            playing = false
        }


    });



}
