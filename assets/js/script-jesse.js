$(document).ready(function () {

	sounds = {
		clickSound: () => $("#clickSound")[0].play()
	}

	console.log("linked");

	function changeHeader () {

		if($("header h1:first-child").hasClass("small-6")) {

			$("header h1:first-child").addClass("small-4").removeClass("small-6");
			$("header h1:last-child").addClass("small-8").removeClass("small-6").text("now this is a small-8 zurb cell");
			$(this).text("Change back to 6/6");

		}
		else {
			$("header h1:first-child").removeClass("small-4").addClass("small-6");
			$("header h1:last-child").removeClass("small-8").addClass("small-6").text("this is a small-6 zurb cell");;
			$(this).text("Change back to 4/8");
		}

	}	

	$("#changeHeader").click(changeHeader).click(sounds.clickSound);

	
});