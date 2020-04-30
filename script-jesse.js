$(document).ready(function () {


	console.log("linked");

	// Try to change ZURB header layout
	$("#changeHeader").click(function() {
		console.log("click");
		console.log($("header:first-child"));
		$("header:first-child").addClass("small-4").removeClass("small-6");
		$("header:last-child").addClass("small-8").removeClass("small-6");
		
		
	});

});