var randomNumber = Math.floor(Math.random() * 102) + 19;
var pinkCrystal = Math.floor(Math.random() * 13) + 1;
var blueCrystal = Math.floor(Math.random() * 13) + 1;
var greenCrystal = Math.floor(Math.random() * 13) + 1;
var crystalValue = 0;
var win = 0;
var loose = 0;
var player = 0;

$(document).ready(function () {

    $("#random-button").on("click", function () {

        var randoNumber = "";
        for (var i = 0; i < 1; i++) {

            var randomNumber = Math.floor(Math.random() * 102) + 19;

            randoNumber = randomNumber + randoNumber;
        }
        $("#random-number").text(randoNumber);
    });

    $("#pink").on("click", function () {
        player = player + parseInt(pinkCrystal);
        $("h5").text(player);

        console.log("User Score: " + player);

    });

    $("#blue").on("click", function () {
        player = player + parseInt(blueCrystal);
        $("h5").text(player);

        console.log("User Score: " + player);

    });

    $("#green").on("click", function () {
        player = player + parseInt(greenCrystal);
        $("h5").text(player);

        console.log("User Score: " + player);

    });

    $("img").on("click", function () {
        crystalValue = parseInt(crystalValue);

        if (player === randomNumber) {
            $("h4").text("You win!!!!");
        }

        else if (player >= randomNumber) {
            $("h4").text("You loose!!!!!");
        }
    });
});

// not workinggg!! helppppppp
$("#btn btn-primary").click(function() {
    location.reload();
});