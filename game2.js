var randomNumber = Math.floor(Math.random() * 50) + 1;
var pinkCrystal = Math.floor(Math.random() * 30) + 1;
var blueCrystal = Math.floor(Math.random() * 30) + 1;
var greenCrystal = Math.floor(Math.random() * 30) + 1;
var win = 0;
var loose = 0;
var player = 0;

$(document).ready(function () {

    $("#random-button").on("click", function () {

        var randoNumber = "";
        for (var i = 0; i < 1; i++) {

            var randomNumber = Math.floor(Math.random() * 50) + 1;

            randoNumber = randomNumber + randoNumber;
        }
        $("#random-number").text(randoNumber);
    });

    $("#pink").on("click", function () {
        player = player + parseInt(pinkCrystal);
        $("h5").text(player);

        console.log("User Score: " + player);

        if (player === randomNumber) {
            win++;
            $("h4").text("You win");

            player = 0
            $("h5").text(player);
            var randomNumber = Math.floor(Math.random() * 50) + 1;
            $("#random-button").html(randomNumber);
        }

        else if (player >= randomNumber) {
            loose++;
            $("h4").text("You loose");

            player = 0;
            $("h5").text(player);
            var randomNumber = Math.floor(Math.random() * 50) + 1;
            $("#random-button").html(randomNumber);
        }
    });


    $("#blue").on("click", function () {
        player = player + parseInt(blueCrystal);

        console.log("User Score: " + player);

        if (player === randomNumber) {
            win++;
            $("h4").text("You win");

            player = 0
            $("h5").text(player);
            var randomNumber = Math.floor(Math.random() * 50) + 1;
            $("#random-button").html(randomNumber);
        }

        else if (player >= randomNumber) {
            loose++;
            $("h4").text("You loose");

            player = 0;
            $("h5").text(player);
            var randomNumber = Math.floor(Math.random() * 50) + 1;
            $("#random-button").html(randomNumber);
        }
    });

    $("#green").on("click", function () {
        player = player + parseInt(greenCrystal);

        console.log("User Score: " + player);

        if (player === randomNumber) {
            win++;
            $("h4").text("You win");

            player = 0
            $("h5").text(player);
            var randomNumber = Math.floor(Math.random() * 50) + 1;
            $("#random-button").html(randomNumber);
        }

        else if (player >= randomNumber) {
            loose++;
            $("h4").text("You loose");

            player = 0;
            $("h5").text(player);
            var randomNumber = Math.floor(Math.random() * 50) + 1;
            $("#random-button").html(randomNumber);
        }
    });
});