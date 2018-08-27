// //$(document).ready(function () {

//    // $("#random-button").on("click", function () {

//     //var randoNumber = "";
//         for (var i = 0; i < 1; i++) {
            
//             var random = Math.floor(Math.random() * 50) + 1;

//             randoNumber = random + randoNumber;
//         }
//         $("#random-number").text(randoNumber);
//     });

//     var randoNumber = "";
//     var counter = 0;
//     var numberOptions = [10, 5, 3, 7, 8, 21, 11, 4, 9];
//     var array = [];
//     var total = [];
//     var player = 0;

//     for (var i = 0; i < numberOptions.length; i++) {

//         var imageCrystal = $("<img>");
//         imageCrystal.addClass("crystal-image");
//         imageCrystal.attr("src", "./assets/images/pinkcrystal.gif");
//         imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//         $("#crystals").html(imageCrystal);

//         var imageCrystal2 = $("<img>");
//         imageCrystal2.addClass("crystal-image");
//         imageCrystal2.attr("src", "./assets/images/bluecrystal.gif");
//         imageCrystal2.attr("data-crystalvalue", numberOptions[i]);
//         $("#crystals2").html(imageCrystal2);

//         var imageCrystal3 = $("<img>");
//         imageCrystal3.addClass("crystal-image");
//         imageCrystal3.attr("src", "./assets/images/greencrystal.gif");
//         imageCrystal3.attr("data-crystalvalue", numberOptions[i]);
//         $("#crystals3").html(imageCrystal3);
//     }

//     $(".crystal-image").on("click", function () {
//     if ($(imageCrystal).attr("class") == "imageCrystal") {
//         total.push(array[i]);
//      }

//      if ($(imageCrystal2).attr("class") == "imageCrystal2") {
//         total.push(array[i]);
//      }

//      if ($(imageCrystal3).attr("class") == "imageCrystal3") {
//         total.push(array[i]);
//      }
//     });

//     $(".crystal-image").on("click", function () {

//         var crystalValue = ($(this).attr("data-crystalvalue"));
//         crystalValue = sum + parseInt(crystalValue);

//         if (sum === randoNumber) {
//          win++;
//             $("h4").append("You win");
//         }

//         else if (counter >= randoNumber) {
//             $("h4").append("You loose");
//         }
//     });
