$(document).ready(function () {

	$(document).foundation();
	sounds = {
		clickSound: () => $("#clickSound")[0].play()
	}

	$("#changeHeader").click(sounds.clickSound);

	
});