var returnNumber

var createRange = function(returnNumber) {
    total = 0
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