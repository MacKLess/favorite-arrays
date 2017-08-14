
$(document).ready(function(){
  $("#fave").submit(function(){
    var colorInput = $("input#color").val();
    var foodInput = $("input#food").val();
    var animalInput = $("input#animal").val();

    var result = [colorInput, foodInput, animalInput];
    var arr2 = [];

    arr2.push(result[1]);
    arr2.push(result[0]);
    arr2.push(result[2]);

    $("#res1").text(arr2[0]);
    $("#res2").text(arr2[1]);
    $("#res3").text(arr2[2]);

    });
    event.preventDefault();
});
