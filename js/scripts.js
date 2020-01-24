
// var Userinput = function (newArray) {
//     var blankArray = []

//     for (var i = 0; i <= newArray; i++) {
//         blankArray.push(i);
//         console.log(blankArray);
//     }
// }





$(document).ready(function () {
    $("form#range-returner").submit(function (event) {
        event.preventDefault();
        var input = parseInt($("input#number").val());
        
            var blankArray = []

            for (var i = 0; i <= input; i++) {
                blankArray.push(i);
                return blankArray    
            }
           console.log(blankArray);
        




    });
});