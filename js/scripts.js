//Business logic
function generateRangeOfNum(input) {
	var range = []
	for (var i = 0; i <= input; i++) {
		range.push(i)
	}
	return range
}
function generateRangeOfStrings(rangeofNum) {
	var beepBoopDaveRange = rangeofNum.map(function (number) {
		var stringifiedNumber = number.toString();
		if (stringifiedNumber.includes("3")) {
			return "I'm sorry Dave. I'm afraid I can't do that."
		} else if (stringifiedNumber.includes("2")) {
			return "boop"
		} else if (stringifiedNumber.includes("1")) {
			return "beep"
		} else {
			return stringifiedNumber;
		}
	})
	console.log("beepBoopDaveRange", beepBoopDaveRange);
	return beepBoopDaveRange.join(", ");
}
//User interface logic
$(document).ready(function () {
	$("form#range-returner").submit(function (event) {
		event.preventDefault();
		var input = parseInt($("input#number").val());
		var rangeOfNum = generateRangeOfNum(input);
		var rangeWithStrings = generateRangeOfStrings(rangeOfNum);
		$("#response").text(rangeWithStrings);
	});
});