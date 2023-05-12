$(document).ready(function() {
  
  let Calc={
    value1: "",
    value2: "",
    result: "",

    validate: function(){
      if (isNaN(this.value1) || isNaN(this.value2))
        return false;
      else
        return true;
    },
    calculate: function(operator){
      console.log(operator, this.value1, this.value2);
      if (this.validate == false) {
        alert('error type');
        return false;
      }

      switch(operator) {
        case '+':
          this.result = value1 + value2;
          break;
        case '-':
          this.result = value1 - value2;
          break;
        case '*':
          this.result = value1 * value2;
          break;
        case '/':
          this.result = value1 / value2;
          break;
        case '^':
          this.result = Math.pow(value1, value2);
          break;  
      }
      console.log(this.result);
      this.showResult();
    },
    showResult: function(){
      $('#result').val(this.result);
    },

  }

  $('#value1').on("change", function(){
    Calc.value1 = parseFloat($('#value1').val());
  });
  $('#value2').on("change", function(){
    Calc.value2 = parseFloat($('#value2').val());
  });

  $('.calculate').on("click", function(event){
    event.preventDefault();
    let operator = $(this).text();
    Calc.calculate(operator);
  });
  
});