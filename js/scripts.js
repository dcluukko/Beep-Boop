
var rangeNumber = function(range) {
    return false;
}


$(document).ready(function() {
    $("form#range-returner").submit(function(event) {
        event.preventDefault();
        var range = parseInt($("input#number").val()) ;
        console.log(range);
        var response = rangeNumber(range);
        $("#response").text(response);
        
    });
});