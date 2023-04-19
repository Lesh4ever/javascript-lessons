//const input = document.getElementById("input");

//input.addEventListener("input", function() {
//  console.log(input.value);
//});

$("#input").on("click", function(event) {
    event.preventDefault();

    var text = $("#input").val();
    //var letters = text.length;
    console.log(text);
});

$("#action").on("click", function(event) {
    event.preventDefault();

    var text = $("#text").val();
    var letters = text.length;
    console.log(text);
    console.log(letters);
});

$(".square").on("click", function(event) {
    event.preventDefault();

    var index = $(".square").index(this);
    console.log(index+1);
    
});