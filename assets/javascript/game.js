//$(document).ready(function () {

    //var blueCrystalCounter = 0;
    //var pinkCrystalCounter = 0;
    //var greenCrystalCounter = 0;


    $(document).ready(function () {

        $("#random-button").on("click", function () {

            var randoNumber = "";
            for (var i = 0; i < 1; i++) {
                var random = Math.floor(Math.random() * 50) + 1;

                randoNumber = random + randoNumber;

            }
            $("#random-number").text(randoNumber);

        });

    var targetNumber = 53;

    $("#number-to-guess").text(targetNumber);

    var counter = 0;

    var numberOptions = [10, 5, 3, 7];

    for (var i = 0; i < numberOptions.length; i++) {

        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
    }

    $(".crystal-image").on("click", function () {
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        alert("New score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
        }

    });
});
