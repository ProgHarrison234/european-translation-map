$(document).ready(function () {

    // define variables

    // langList: language list 
    let langList = ["en", "es", "fr", "it", "nl", "hu", "ru", "uk", "de", "pl", "el", "pt", "cs", "hr", "sr", "bg", "da", "no", "sv", "lt", "lv", "et", "fi"]; // English, Spanish, French, Italian, Dutch, Hungarian, Russian, Ukrainian, German, Polish, Greek, Portuguese, Czechia "cs", Croatia "hr", Serbia "sr", Bulgaria "bg", Denmark "da", Norway "no", Sweden "sv", Lithuania "lt", Latvia "lv", Estonia "et", Finland "fi"
    let countryList = ["Br", "Sp", "Fr", "It", "Nl", "Hu", "Ru", "Uk", "De", "Pl", "El", "Pt", "Cs", "Hr", "Sr", "Bg", "Da", "No", "Sv", "Lt", "Lv", "Et", "Fi"];

    let input = "Hello World!";

    let map = tt.map({
	    
        container: 'map',
        key: 'UidCozvRt9CII6OELF37fl3Z07e2PyGh',
        center: { lat: 50.9375, lng: 6.9603 },
        zoom: 3.8,
        style: 'tomtom://vector/1/basic-main',
	   language: "en-US"
	   
    });

    let coordinates = { Br: [-0.009184, 51.51279], Sp: [-3.703790, 40.416775], Fr: [2.3488, 48.85341], It: [12.5113300, 41.8919300], Nl: [4.8952, 52.3702], Hu: [19.0402, 47.4979], Ru: [37.6237, 55.7496], Uk: [30.5234, 50.4201], De: [13.4061, 52.5192], Pl: [21.0122, 52.2297], El: [23.7293, 37.9837], Pt: [-9.15, 38.7253], Cs: [14.4378, 50.0755], Hr: [15.9779, 45.813], Sr: [20.4622, 44.8206], Bg: [23.3217, 42.6978], Da: [12.5683, 55.6761], No: [10.7522, 59.9139], Sv: [18.0649, 59.3289], Lt: [25.2797, 54.6872], Lv: [24.1052, 56.9496], Et: [24.7536, 59.437], Fi: [24.9386, 60.1698] }; // [lng, lat]
    let markerHeight = 0, markerRadius = 10, linearOffset = 25;
    let popupOffsets = {

        'top': [0, 0],
        'top-left': [0, 0],
        'top-right': [0, 0],
        'bottom': [0, -markerHeight],
        'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'left': [markerRadius, (markerHeight - markerRadius) * -1],
	   'right': [-markerRadius, (markerHeight - markerRadius) * -1]
	   
    };


    // translate the input english phrase to multiple languages given in langList, and create popups
    function translate() {

        input = $("#userInput").val();
	   $(".translatedPopup").remove();
	   
        for (let i = 0; i < langList.length; i++) {

            // for english - english pair, just use the input value
            if (langList[i] === "en") {
			  
                let marker = new tt.Marker().setLngLat(coordinates["Br"]).addTo(map);
                let popup = new tt.Popup({ offset: popupOffsets, closeButton: false, className: "translatedPopup" }).setHTML(input);
                marker.setPopup(popup).togglePopup();
			 continue;
			 
            }

            let tar = langList[i];
            let settings = {

                "async": true,
                "crossDomain": true,
                "url": "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=en&target=" + tar + "&input=" + input,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
				"x-rapidapi-key": "93a3b6aa67mshcc551909c5a2a60p176b4cjsn24b1dd1fd651"
				
			 }
			 
            }
            $.ajax(settings).done(function (response) {

                let marker = new tt.Marker().setLngLat(coordinates[countryList[i]]).addTo(map);
                let popup = new tt.Popup({ offset: popupOffsets, closeButton: false, closeOnClick: false, className: "translatedPopup" }).setHTML(response.outputs[0].output);
			 marker.setPopup(popup).togglePopup();
			
            });
        }
    }

    function assignListeners() {

        $('#userInput').keydown(function (event) {

            if (event.keyCode === 13) {

                translate();

            }

        });

        $("#translate").click(translate);

    }

    assignListeners();

});