var flag = false;

$("#show").on("click", function(event) { // $(selector).on(event, action);
    event.preventDefault(); // відміняє стандартну дію елементу
    
    if (flag == false) {
        flag = true;
        $("#text").show('slow');
    }
    else {
        flag = false;
        $("#text").hide('slow');
    }
});


$("#count").on("click", function(event) {
    event.preventDefault();

    var text = $("#input").val();
    var letters = text.length;
    console.log(letters);
});