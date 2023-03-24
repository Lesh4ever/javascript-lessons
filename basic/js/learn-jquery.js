

// $('.title').text('hello world');
// $('.title').addClass('k2 k3');
// $('.title').attr('id', 'first');
// $('.title').attr('data-time', '13:30');

// $('.title').css('color', 'blue');
// $('.title').css({ 
//     'color': 'blue', 
//     'font-size': '60px' 
// });


$('.title').css('color', 'blue');
// var flag = 0;
setInterval(function() {
    console.log( $('.title').css('color') );

    if ($('.title').css('color') == 'rgb(0, 0, 255)') {
        $('.title').css('color', 'red');
    }
    else {
        $('.title').css('color', 'blue');
    }

    // if (flag == 0) {
    //     $('.title').css('color', 'blue');
    // }
    // else {
    //     $('.title').css('color', 'red');
    // }

    // if (flag == 0) {
    //     flag = 1;
    // }
    // else {
    //     flag = 0;
    // }
}, 1000);

$('.title2').css('color', '#E228EA');
// var flag = 0;
setInterval(function() {
    console.log( $('.title2').css('color') );

    if ($('.title2').css('color') == 'rgb(0, 0, 255)') {
        $('.title2').css('color', '#E228EA');
    }
    else {
        $('.title2').css('color', '#63EA28');
    }
}, 1000);