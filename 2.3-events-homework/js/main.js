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

$(document).ready(function() {
  
  function calculate(operator) {
    
    var value1 = parseFloat($('#value1').val());
    var value2 = parseFloat($('#value2').val());

   
    switch(operator) {
      case '+':
        var result = value1 + value2;
        break;
      case '-':
        var result = value1 - value2;
        break;
      case '*':
        var result = value1 * value2;
        break;
      case '/':
        var result = value1 / value2;
        break;
    }
   
    $('#result').val(result);
  }

  
  $('#plus').click(function(event) {
    event.preventDefault();
    calculate('+');
  });

  $('#minus').click(function(event) {
    event.preventDefault();
    calculate('-');
  });

  $('#multiply').click(function(event) {
    event.preventDefault();
    calculate('*');
  });

  $('#divide').click(function(event) {
    event.preventDefault();
    calculate('/');
  });
});