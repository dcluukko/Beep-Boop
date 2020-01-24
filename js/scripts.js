
var blankArray = []
var heresOne;
var userInput = function(forArray) {
for (var i = 0; i <= forArray; i++) {
    blankArray.push(i);
    return blankArray
    
  }
};
var findOne = function(numberInput) {
    var rangeArray = numberInput;
    for ( var i = 0; i <= numberInput; i ++ ){
        console.log(rangeArray);
      if (rangeArray.includes("13") ){
        alert("truth!");
      }
    }       
  };
  



$(document).ready(function () {
    $("form#range-returner").submit(function (event) {
        event.preventDefault();
        var input = parseInt($("input#number").val());
        input = userInput(input)
        input = findOne(input); 
          
        
          
        




    });
});