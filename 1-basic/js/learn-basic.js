// var train = [1, 5, 35, 45, 84, 22];
// var train2 = [1, 5, 140, 45, 150, 22];
// var train2 = array(1, 5, "papa");




// function whatismax(arr) {
//     var max = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(whatismax(train));
// console.log(whatismax(train2));

var korin = 80;

function sqrt (arr) {
    var resalt = Math['sqrt'](arr);
    return resalt;
};

// console.log (sqrt(korin));



// Home task - what is sum?
var arr = [2, 3, 8, 1, 4];
var arr2 = [2, 3, 8, 1, 4, 10];


var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = (arr[i]+sum); 
}
// console.log(sum);



function sum2 (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = (arr[i]+sum); 
    }
    return sum;
};

console.log (sum2(arr));
console.log (sum2(arr2));

// слово з найбільшою кількістю літер



var words5 = ["Dinis", "Diana222222", "Yurchik"];

console.log (long_word(words5));


function long_word (words) {
    var leters = 0;
    for (var i = 0; i < words.length; i = i+1) {
        if (words[i].length > leters) {
            leters = words[i].length;
         }
     }
     return leters;
} 


// var g = 5;
// while (g > 0) {
//     //g = g - 1; // --g
//     console.log('g:', --g);

//     //g = g - 1; // g--
// }

function long_word_while (words) {
    console.log('arr', words);
    var k = 0;
    var leters = 0;
    while (k < words.length) {
        if (words[k].length > leters) {
            leters = words[k].length;
        }
        k = k + 1; // k++
    }
    return leters
}
console.log (long_word_while(words5));

do {

}
while(true);