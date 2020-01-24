

var createRange = function(returnNumber) {
// var rangeNums = [returnNumber];
// var addemUp = rangeNums.map(function(rangeNum) {
//     rangeNum + 1;
// });
// alert(addemUp);

    for (var index = 0; index <= returnNumber; index += 1)
    console.log(returnNumber);
}
    

$(document).ready(function() {
    $("form#range-returner").submit(function(event) {
        event.preventDefault();
        var input = parseInt($("input#number").val()) ;
        input = createRange(input);
        
    });
});