
var blankArray = []
var heresOne;
var userInput = function(forArray) {
for (var i = 0; i <= forArray; i++) {
    blankArray.push(i);
    var intoString = blankArray.toString();
    if (intoString.includes("1")) {
        intoString.replace(/1/g, "beep");
     }
  } 
};




$(document).ready(function () {
    $("form#range-returner").submit(function (event) {
        event.preventDefault();
        var input = parseInt($("input#number").val());
        input = userInput(input)
        
          
        
          
        




    });
});