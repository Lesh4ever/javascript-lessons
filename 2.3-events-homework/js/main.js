$(document).ready(function() {
  
  function calculate(operator) {
    
    var value1 = parseFloat($('#value1').val());
    var value2 = parseFloat($('#value2').val());

    if (isNaN(value1) || isNaN(value2)) {
      alert("введіть коректні данні");
    }
    else {
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
        case '^':
          var result = Math.pow(value1, value2);
          break;  
      }
      $('#result').val(result);
    }
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

  $('#pow').on("click", function(event) {
    event.preventDefault();
    calculate('^');
  }) 

  
});